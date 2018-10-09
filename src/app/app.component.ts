import { ClassesFirebaseService } from './service/recipes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  titles = ['Home','Adicionar Medida','Relatorios'];
  title: string = 'Home';
  steps: number = 1;
  selectOptions;

  showFormula: boolean = false;

  pesagem = {};
  list;
  report;
  recipeToMake = {
    name: '',
    total: '',
    ingredients: [],
    old: ''
  }
  
  constructor (private recipes: ClassesFirebaseService) {
    
    this.pesagem = {
      name: '',
      peso: '',
      status: false
    }

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getRecipes();
    this.getRecipesToMake();
    this.getAllrecipesToMake();
  }

  changeTab (step: number) {
    this.steps = step;
    this.title = this.titles[step-1];
  }

  getRecipesToMake () {
    this.recipes.getActiveRecipes()
      .subscribe( data => {
        let temp = [];

        for (let i=0; i < data.length; i++) {

          if (data[i]['status'] == false) {
            temp.push(data[i]);
          }
        }

        this.list = temp;

      });
  }

  getAllrecipesToMake () {
    this.recipes.getActiveRecipes()
      .subscribe( data => {
        this.report = data;
      });    
  }

  getRecipes () {
    this.recipes.getRecipes()
      .subscribe (data => {
        this.selectOptions = data[0];
      })
  }

  addWeight ($event) {

    $event.preventDefault();    
    let payload = this.pesagem;
    this.recipes.addWeight(payload);

    this.steps = 1;
  }

  addRecipe () {
  }

  checkQuantities (obj) {
    this.showFormula = true;

    this.recipes.getRecipes()
      .subscribe( data => {
        
        let recipe = data[0];

        for(let i=0; i < recipe['length']; i++) {
          if ( recipe[i].name == obj.name) {
            let resultArray = Object.keys(recipe[i]['items']).map(
              function(personNamedIndex){
                let person = {
                  quantity: recipe[i]['items'][personNamedIndex],
                  name: personNamedIndex,
                  status: false
                }
                return person;
              });
            recipe[i]['items'] = resultArray;

            this.recipeToMake = recipe[i];
            this.recipeToMake.old = obj;

          }
        }

      })
  }

  addedIngredient (recipe, name, $event) {
    
    for (let index = 0; index < recipe['items'].length; index++) {
      if ( recipe['items'][index].name == name) recipe['items'][index].status = true;
    }
    
  }
}
