import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedView = 'recipes';

  navigate(view: string) {
    this.loadedView = view;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCOfhOtgvE44C8Q2EKsuuJWENpYVBZvTEQ",
      authDomain: "ng-recipe-book-5ec34.firebaseapp.com"
    })
  }

  /* Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCOfhOtgvE44C8Q2EKsuuJWENpYVBZvTEQ",
    authDomain: "ng-recipe-book-5ec34.firebaseapp.com",
    databaseURL: "https://ng-recipe-book-5ec34.firebaseio.com",
    projectId: "ng-recipe-book-5ec34",
    storageBucket: "ng-recipe-book-5ec34.appspot.com",
    messagingSenderId: "341144241060",
    appId: "1:341144241060:web:5104e7e1869f8a288bb731",
    measurementId: "G-SVBNWX1LMT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics(); */
}
