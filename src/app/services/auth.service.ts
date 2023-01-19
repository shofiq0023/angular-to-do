import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public fireAuth: Auth) { }

  signUpWithGoogle() {
    return signInWithPopup(this.fireAuth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.fireAuth);
  }
}
