import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
  new Recipe('A test Recipe1', 'This is a simple test', 'http://www.seriouseats.com/recipes/assets_c/2016/01/20160116-american-beef-stew-recipe-34-thumb-1500xauto-429351.jpg' ),
  new Recipe('A test Recipe2', 'Thi is a simple test', 'http://www.seriouseats.com/recipes/assets_c/2016/01/20160116-american-beef-stew-recipe-34-thumb-1500xauto-429351.jpg' ),
  new Recipe('A test Recipe3', 'Thi is a simple test', 'http://www.seriouseats.com/recipes/assets_c/2016/01/20160116-american-beef-stew-recipe-34-thumb-1500xauto-429351.jpg' ) ];
  
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
    //console.log(this.recipeWasSelected.emit(recipe))
  }
}
