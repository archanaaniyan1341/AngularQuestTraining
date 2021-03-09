import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[
  new Recipe('Test','test','https://www.justataste.com/wp-content/uploads/2014/07/cheesy-leftover-mashed-potato-pancakes_recipe.jpg')
];
  constructor() { }

  ngOnInit(): void {
  }

}
