import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../models/ingredient.model';
import { ShoppingService } from '../../services/shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('form') shoppingForm: NgForm;
  subscription: Subscription;
  editMode: boolean = false;
  editedIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingSvc: ShoppingService) { }

  addToList(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode === true) {
      this.shoppingSvc.updateIngredient(this.editedIndex, newIngredient)
    } else {
      this.shoppingSvc.ingredientAdded(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  clearForm() {
    this.shoppingForm.reset();
    this.editMode = false;
  }

  deleteItem() {
    this.clearForm();
    this.shoppingSvc.deleteIngredient(this.editedIndex)
  }

  ngOnInit() {
    this.subscription = this.shoppingSvc.startedEditing.subscribe((index: number) => {
      this.editedIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingSvc.getIngredient(index)
      this.shoppingForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }

}
