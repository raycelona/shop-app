import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Response } from '@angular/http';

import { RecipeService } from './recipe.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {
  location: string = 'https://ng-recipe-book-5ec34.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipeService: RecipeService, private auth: AuthService) { }

  saveRecipe() {
    const token = this.auth.getToken();
    const params = new HttpParams().set('auth', token);
    const req = new HttpRequest(
      'PUT', 
      this.location, 
      this.recipeService.getRecipes(), 
      {reportProgress: true, params});
      return this.http.request(req);
  //   const headers = new HttpHeaders();
  //   return this.http.put(this.location, this.recipeService.getRecipes(), 
  //   {
  //     observe: 'body',
  //     headers,
  //     params: new HttpParams().set('auth', token)
  // });
  }

  getRecipes() {
    const token = this.auth.getToken();
    return this.http.get(this.location, 
      {
        observe: 'body',
        responseType: 'json',
        params: new HttpParams().set('auth', token)
    })
    .subscribe((response: Response) => {
      this.recipeService.setRecipes(response);
    })
  }

}
