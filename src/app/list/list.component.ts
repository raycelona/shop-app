import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'; 

import { Ingredient } from '../models/ingredient.model';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  subscription: Subscription;

  constructor(private shoppingSvc: ShoppingService) { }

  editItem(index: number) {
    this.shoppingSvc.startedEditing.next(index);
  }

  ngOnInit() {
    this.ingredients = this.shoppingSvc.shoppingList();
    this.subscription = this.shoppingSvc.updatedIngredients.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
