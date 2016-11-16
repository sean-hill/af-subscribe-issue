import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public items: FirebaseListObservable<any[]>;
  
  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.items = this.af.database.list('/items');
      }
    });
  }

  add() {
    this.items.push({ date: new Date().getTime() });
  }

  viewAll() {
    this.items.subscribe(items => {
      console.log('Items:', items);
    });
  }

}
