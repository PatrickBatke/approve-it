import { Component } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent {
  public edited = true;

  constructor (private router: Router) {  }
}
