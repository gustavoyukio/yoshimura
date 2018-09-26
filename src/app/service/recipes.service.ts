import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassesFirebaseService {

  items: Observable<any[]>;
  path: string = "/yoshimura"

  constructor(private db: AngularFireDatabase) {
    
  }

  getValues () {
    return this.db.list(this.path).valueChanges();
  }

  getActiveRecipes () {
    return this.db.list(this.path+"/weighted").valueChanges();
  }

  getRecipes () {
    return this.db.list(this.path+"/recipes").valueChanges();
  }

  addItems (obj: object) {
    this.db.list('/'+this.path).push(obj);
  }

  addWeight (obj) {
    this.db.list('/'+this.path+"/weighted").push(obj);
  }

  addRecipes (obj) {
    this.db.list('/'+this.path+'/recipes').push(obj);
  }


}
