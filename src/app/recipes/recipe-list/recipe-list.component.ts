import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'just a test description', 'https://pattayaprestigeproperties.com/wp-content/uploads/2019/01/steak-pattaya.jpg')
  ];

  

  constructor() { }

  ngOnInit(): void {
  }


}
