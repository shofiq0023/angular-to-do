import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  faGoogle = faGoogle;
  loading = false;
  errMsg = '';

  constructor(private authService: AuthService, public fireAuth: Auth, private router: Router) { }

  ngOnInit(): void {}

  googleLogin() {
    this.loading = true;
    this.authService
      .signUpWithGoogle()
      .then(() => {
        console.log(`logged in as ${this.fireAuth.currentUser?.displayName}`);
        this.loading = false;
        this.router.navigate(['/home']);
      })
      .catch((err) => {
        this.loading = false;

        this.errMsg = 'There was an error';
        this.errMsg = this.convertErrorMessage(err.code);
        setTimeout(() => this.errMsg = '', 2500);
      });
  }

  convertErrorMessage(code: string): string {
    switch(code) {
      case 'auth/user-not-found':
        return 'User not found';
        break;
      case 'auth/popup-closed-by-user':
        return 'Popup closed!';
        break;
      default:
        return 'Login error. Please try again';
    }
  }

}
