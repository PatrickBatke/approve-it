import { Component } from "@angular/core";
import { RouterModule, Routes, Router, ActivatedRoute, ParamMap, NavigationEnd } from "@angular/router";
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-checkmail',
  templateUrl: './checkmail.component.html',
  styleUrls: ['./checkmail.component.css']
})
export class CheckmailComponent {
  user: { email: string };
  text: string;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.user = { email: "" };
    this.text = "Wir haben dir einen Link geschickt!";
  }

  onClick() {
    this.user.email = this.route.snapshot.params.email;
    this.authService.forgot(this.user).subscribe((response: Response) => {
      if (response.hasOwnProperty('existing')) {
        this.text = "Wir haben dir erneut einen Link geschickt!";
      }
      else {
        this.router.navigate(['/auth/forgot']);
      }
    });
  }



}
