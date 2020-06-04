import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  sendToList() {
    this.recipeSvc.sendToList(this.recipe.ingredients);
  }

  editRecipe() {
    this.route.navigate(['edit'], { relativeTo: this.router })
  }

  deleteRecipe() {
    this.recipeSvc.deleteRecipe(this.id);
    this.route.navigate(['/recipe']);
  }

  constructor(private recipeSvc: RecipeService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeSvc.getRecipeID(this.id)
    })
    console.log(this.recipe);
  }

}
