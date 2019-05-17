import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  iflogin: boolean = false; 
  ifother: boolean = false;

  constructor( public router: Router) {
    if (this.router.url !== "/" && this.router.url !== "/auth") {      
      this.iflogin = false;
      this.ifother = true;
    }

    if (this.router.url === "/" || this.router.url === "/auth") {
      this.iflogin = true;
      this.ifother = false;
    }
   }

  ngOnInit() {
 
  }
}
