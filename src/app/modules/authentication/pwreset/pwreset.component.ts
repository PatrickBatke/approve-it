import { Component } from "@angular/core";
import { RouterModule, Routes, Router, ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-pwreset',
  templateUrl: './pwreset.component.html',
  providers: [AuthService],
  styleUrls: ['./pwreset.component.css']
})
export class PWResetComponent {
  user: { newpw: string, newpw2: string, email: string, token: string };
  show: boolean = false;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    this.user = { newpw: "", newpw2: "", email: "", token: "" };
  }

  onClick() {
    if (this.user.newpw === this.user.newpw2) {
      this.user.token = this.route.snapshot.params.token;
      this.user.email = this.route.snapshot.params.email;
      this.authService.reset(this.user).subscribe((response: Response) => {
        if (response.hasOwnProperty('success')) {
          this.router.navigate(['/auth/login']);
        }
        else {
          this.router.navigate(['/auth/forgot']);
        }
      });
    }
    else {
      this.show = true;
    }
  }

}
