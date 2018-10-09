import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { PorcentagensPipe } from './pipes/porcentagens.pipe';
import { IngredientesPipe } from './pipes/ingredientes.pipe';


const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAGDJSQrFrZksxGHGRIebyqBwobWftS1VE",
    authDomain: "calendario-d2f40.firebaseapp.com",
    databaseURL: "https://calendario-d2f40.firebaseio.com",
    projectId: "calendario-d2f40",
    storageBucket: "calendario-d2f40.appspot.com",
    messagingSenderId: "850188662389"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    PorcentagensPipe,
    IngredientesPipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database,
    FormsModule
  ],
  providers: [PorcentagensPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
