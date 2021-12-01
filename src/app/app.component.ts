/*********************************************************************************
*  WEB422 – Assignment 06
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
*  assignment has been copied manually or electronically from any other source (including web sites) or 
*  distributed to other students.
* 
*  Name: James Bilik   Student ID: 155500192 Date: December 1st, 2021
*
*  Angular App (Deployed) Link: _____________________________________________________
*
*  User API (Heroku) Link: https://ancient-mountain-38099.herokuapp.com/
*
********************************************************************************/ 

import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { NavigationStart, Router, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchString: string = "";
  title = 'web422-a5';
  token: any;  
  
  constructor( private auth: AuthService, private router: Router) {}
  
  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationStart) {
        this.token = this.auth.readToken();
      }
    });
  }

  handleSearch() {
    this.router.navigate(['/search'], {
      queryParams: { q: this.searchString },
    });
    this.searchString = "";
  }

  logout() {
    this.token = undefined;
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
}