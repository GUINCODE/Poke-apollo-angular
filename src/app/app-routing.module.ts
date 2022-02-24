import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { ListeCommandeComponent } from './components/liste-commande/liste-commande.component';
import { AddCommandeComponent } from './components/add-commande/add-commande.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'add-commande', component: AddCommandeComponent },
  { path: 'liste-commande', component: ListeCommandeComponent  },
  { path: '', component: WellcomeComponent  },
  { path: '**', component: WellcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
