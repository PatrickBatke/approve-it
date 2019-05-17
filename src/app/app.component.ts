import { Component } from "@angular/core";
import {
  RouterModule,
  Routes,
  Router,
  NavigationStart,
  Event as NavigationEvent
} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'approveIT - Online Status Approval System';

  constructor() {

  }
}
