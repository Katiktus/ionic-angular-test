import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://ychef.files.bbci.co.uk/976x549/p07jjljf.jpg',
      ingrediens: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://food-images.files.bbci.co.uk/food/recipes/healthyspaghettibolo_80401_16x9.jpg',
      ingrediens: ['Spaghetti', 'Meat', 'Tomatoes']
    }
];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {...this.recipes.find(recipe => recipe.id === recipeId)};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }
}
