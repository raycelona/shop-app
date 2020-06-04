import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from '../../models/recipe.model'
import { RecipeService } from '../../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

import { DbServiceService } from '../../services/db-service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  // recipes: Recipe[];
  recipes: any;
  subscription: Subscription;

  constructor(
    private recipeSvc: RecipeService, 
    private router: Router, 
    private route: ActivatedRoute,
    private dbs: DbServiceService) { }

  newRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  ngOnInit() {
    // this.dbs.getRecipes().subscribe((recipe) => {
    //   this.recipes = recipe;
    // }) 
    this.recipes = this.recipeSvc.getRecipes();
    this.subscription = this.recipeSvc.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
