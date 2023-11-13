import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app'; // Ajoutez cette ligne
import 'firebase/compat/auth'; // Ajoutez cette ligne


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router) { }
   //login method

   login(email : string, password : string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( (response) => {
      localStorage.setItem('token','true');
      localStorage.setItem('user',JSON.stringify(response.user));
      this.router.navigate(['/page-home']);
      console.log(response)
    }, err => {
      alert('err.message');
      this.router.navigate(['/login']);
    })
  }

  //sign out method
  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    }, err  => { 
      alert(err.message);
    })
  }

  loginWithPhoneNumber(phoneNumber: string, appVerifier: firebase.auth.ApplicationVerifier): Promise<firebase.auth.ConfirmationResult> {
    return this.fireauth.signInWithPhoneNumber(phoneNumber, appVerifier);
  }
  
  confirmVerificationCode(confirmationResult: firebase.auth.ConfirmationResult, verificationCode: string) {
    return confirmationResult.confirm(verificationCode);
  }

  signup(email: string, password: string) {
    return this.fireauth.createUserWithEmailAndPassword(email, password)
      .then((response) => {
        localStorage.setItem('token','true');
        localStorage.setItem('user',JSON.stringify(response.user));
        this.router.navigate(['/page-home']);
        console.log(response)
      })
      .catch((error) => {
        console.error(error);
        alert('Une erreur est survenue lors de la création du compte.');
      });
  }

}
