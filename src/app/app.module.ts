import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAg3Rae87Z2zXofsF0QMDl1BSnB3cSvcf0",
  authDomain: "trying-it-out-a7e09.firebaseapp.com",
  databaseURL: "https://trying-it-out-a7e09.firebaseio.com",
  storageBucket: "trying-it-out-a7e09.appspot.com",
  messagingSenderId: "859337090548"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
