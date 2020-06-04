import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  updatedIngredients = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('oranges', 5)
  ];

  getIngredient(index) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.updatedIngredients.next(this.ingredients.slice());
  }

  shoppingList() {
    return this.ingredients.slice();
  }
   ingredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.updatedIngredients.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.updatedIngredients.next(this.ingredients.slice());
  }

  receiveIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.updatedIngredients.next(this.ingredients.slice());
  }

  constructor() { }
}
