import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { DbServiceService } from '../../services/db-service.service';
import { AuthService } from '../../services/auth.service';
// import { HttpEvent, HttpEventType } from '@angular/common/http';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private dbs: DbServiceService, private auth: AuthService) { }

  onSave() {
    this.dbs.saveRecipe().subscribe((response) => {
      console.log(response);
    });
  }

  onGet() {
    this.dbs.getRecipes();
  }

  onLogout() {
    this.auth.logOut();
  }

  ngOnInit() {
  }

}
