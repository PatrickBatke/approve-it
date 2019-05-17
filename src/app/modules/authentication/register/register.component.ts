import { Component } from "@angular/core";
import { RouterModule, Routes, Router } from "@angular/router";
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [AuthService],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: { username: string, email: string, password: string, c_password: string };
  constructor(private authService: AuthService, private router: Router) {
    this.user = { email: "", username: "", password: "", c_password: "" };
  }

  onClick() {
    this.authService.register(this.user).subscribe();
    this.router.navigate(['/auth/checkverificationmail/' + this.user.email]);
  }

}
