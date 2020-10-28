import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  recipes: Recipe[] = [
    new Recipe('Steak', 'just a test description', 'https://pattayaprestigeproperties.com/wp-content/uploads/2019/01/steak-pattaya.jpg'),
    new Recipe('Ice Cream', 'just a test description', 'https://sites.google.com/site/dessertofsleeppypillow/_/rsrc/1449799437975/icecream/Icecream.jpg')
  ];

  

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
