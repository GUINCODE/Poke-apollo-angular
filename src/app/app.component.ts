import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pok';

  constructor(private router: Router) {}

   goToAddCommande() {
   this.router.navigate(['/add-commande']);
  }
   goToListeCommande() {
   this.router.navigate(['/liste-commande']);
  }
}
