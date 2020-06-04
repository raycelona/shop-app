import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  constructor(private shoppingSvc: ShoppingService) { }

  private recipes: Recipe[] = [
    new Recipe(
      'Fat Burger',
      'It\'s fat.',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-turkey-bacon-easter-dinner-1583622046.jpg?crop=0.913xw:0.915xh;0.0323xw,0.0341xh&resize=980:*',
      [new Ingredient('meat', 1),
      new Ingredient('buns', 2)]),
    new Recipe(
      'Chicken thing',
      'just another test',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/healthy-dinner-ideas-striped-bass-radish-salsa-verde-ghk-0519-1556659527.jpg?crop=0.672xw:1.00xh;0.253xw,0&resize=980:*',
      [new Ingredient('chicken breast', 2),
      new Ingredient('potato', 1)])
  ];

  sendToList(ingredients: Ingredient[]){
    this.shoppingSvc.receiveIngredients(ingredients);
  }

  getRecipes() {
    return this.recipes.slice();
  }

  setRecipes(recipes) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipeID(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1)
    this.recipesChanged.next(this.recipes.slice());
    console.log(this.recipes)
  }

  deleteIngredient(index: number) {
    // this.recipes.splice(index, 1);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}
