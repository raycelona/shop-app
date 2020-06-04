import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from "../services/auth-guard.service";
import { RecipeStartComponent } from "../recipe/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "../recipe/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "../recipe/recipe-edit/recipe-edit.component";
import { RecipeComponent } from "../recipe/recipe.component";

const recipesRoutes: Routes = [
    {path: '', component: RecipeComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
        ]},
];
@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule]
})
export class RecipesRoutingModule { }