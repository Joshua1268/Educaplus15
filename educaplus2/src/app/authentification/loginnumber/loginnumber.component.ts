import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
@Component({
  selector: 'app-loginnumber',
  templateUrl: './loginnumber.component.html',
  styleUrls: ['./loginnumber.component.css']
})
export class LoginnumberComponent {
  recaptchaVerifier: firebase.auth.RecaptchaVerifier | undefined;
  confirmationResult: firebase.auth.ConfirmationResult | undefined;
  router: any;
  number: any;
email: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  }

  login() {
      
    if(this.number == '') {
      alert('veuillez entrez votre numéro');
      return;
    }
  }

  sendVerificationCode(phoneNumber: string) {
    if (this.recaptchaVerifier) {
      this.authService.loginWithPhoneNumber(phoneNumber, this.recaptchaVerifier)
        .then((result) => {
          this.confirmationResult = result;
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.error('recaptchaVerifier is not defined');
    }
  }

  confirmVerificationCode(verificationCode: string) {
    if (this.confirmationResult) {
      this.authService.confirmVerificationCode(this.confirmationResult, verificationCode)
        .then((result) => {
          // Utilisateur connecté avec succès
          localStorage.setItem('token','true');
          localStorage.setItem('user',JSON.stringify(result.user));
          this.router.navigate(['/page-home']);
          console.log(result);
        })
        .catch((error) => {
          // Code de vérification incorrect
          alert(error.message);
          this.router.navigate(['/login']);
        });
    } else {
      console.error('confirmationResult is not defined');
    }
  }
}

