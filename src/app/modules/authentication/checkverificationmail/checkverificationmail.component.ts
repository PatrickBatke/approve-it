import { Component } from "@angular/core";
import { RouterModule, Routes, Router, ActivatedRoute, ParamMap, NavigationEnd } from "@angular/router";
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-checkverificationmail',
  templateUrl: './checkverificationmail.component.html',
  styleUrls: ['./checkverificationmail.component.css']
})
export class CheckverificationmailComponent {
  user: { name: string, email: string, password: string, c_password: string };
  text: string;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.user = { email: "", name: "", password: "", c_password: "" };
    this.text = "Wir haben dir einen Link geschickt!";
  }

  onClick() {
    this.user.email = this.route.snapshot.params.email;
    this.authService.register(this.user).subscribe((response: Response) => {
      if (response.hasOwnProperty('success')) {
        this.text = "Wir haben dir erneut einen Link geschickt!";
      }
      else {
        this.router.navigate(['/auth/forgot']);
      }
    });
  }

}
