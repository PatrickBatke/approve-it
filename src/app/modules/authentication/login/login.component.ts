import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  providers: [AuthService],
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  user: { email: string, password: string };
  response = {};
  show: boolean = false;

  constructor(private authService: AuthService, private router: Router) { 
    this.user = { email: "", password: "" };
  }

  onClick() {
    this.authService.login(this.user).subscribe(result => {
      this.show = false;
      this.router.navigate(['/project/project-overview']);
    },
      error => {
        this.show = true;
      }
    );
  }

}
