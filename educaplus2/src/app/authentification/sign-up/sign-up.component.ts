import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private authService: AuthService) {}

  onFormSubmit(email: string, password: string, confirmPassword: string) {
    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }

    this.authService.signup(email, password)
      .then((response: any) => {
        console.log(response);
        // Redirigez l'utilisateur vers la page d'accueil ou effectuez d'autres actions ici.
      })
      .catch((error: any) => {
        console.error(error);
        alert('Une erreur est survenue lors de la création du compte.');
      });
  }

}
