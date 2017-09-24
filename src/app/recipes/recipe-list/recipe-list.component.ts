import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
  new Recipe('A test Recipe', 'Thi is a simple test', 'http://www.seriouseats.com/recipes/assets_c/2016/01/20160116-american-beef-stew-recipe-34-thumb-1500xauto-429351.jpg' ),
  new Recipe('A test Recipe', 'Thi is a simple test', 'http://www.seriouseats.com/recipes/assets_c/2016/01/20160116-american-beef-stew-recipe-34-thumb-1500xauto-429351.jpg' ),
  new Recipe('A test Recipe', 'Thi is a simple test', 'http://www.seriouseats.com/recipes/assets_c/2016/01/20160116-american-beef-stew-recipe-34-thumb-1500xauto-429351.jpg' ) ];
  
  constructor() { }

  ngOnInit() {
  }

}
