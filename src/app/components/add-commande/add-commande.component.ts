import { Subscription } from 'rxjs';
import { Entreprise } from '../../types/entrepriseType';
import { EntrepriseService } from '../../services/entreprise.service';
import { Commande } from '../../types/commandeType';
import { CommadeService } from "../../services/commade.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Component({
  selector: "app-add-commande",
  templateUrl: "./add-commande.component.html",
  styleUrls: ["./add-commande.component.scss"],
})
export class AddCommandeComponent implements OnInit {
   entreprises!: Entreprise[]
    loading: boolean = true;
    isSaved:any;

   _commande : Commande = {
     id: 0,
     libelle: "",
     montantTotal: 0.00,
     numCommande: '',
     entrepriseId: 0
   }

     private querySubscription!: Subscription;
  constructor(private commandeService: CommadeService, private entrepriseService: EntrepriseService, private notification: NzNotificationService) {}

  ngOnInit(): void {
    this.getEntreprises()
  }

  addCommande(commande: Commande): boolean {
    this.commandeService.addCommande(commande).subscribe(
      ({ data }) => {
        console.log(data);

        this.isSaved=data
        if (this.isSaved.saveCommande=='saved') {
          return true
        }
        else  {
          console.log("false false");
          return false
        }
      },
      (error) => {
        console.log(`error: ${error}`);
      }
    );
    return false;
  }


  getEntreprises() {
      this.querySubscription =  this.entrepriseService.getEntreprises().valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.entreprises = data.entreprises;
        console.log(this.entreprises);
      });
}
   onSubmit(form: NgForm) {
     const isNotSuccess = this.addCommande(this._commande)
      if (!isNotSuccess) {
        form.resetForm()
        this.createNotificationSucces('success')
      } else {
           this.createNotificationError('error')
      }
   }

   createNotificationSucces(type: string): void {
    this.notification.create(
      type,
      'Ajout nouvelle commande',
      "L'enregistrement de la commande est effectuée avec success"
    );
  }
   createNotificationError(type: string): void {
    this.notification.create(
      type,
      "Echec d'ajout commande",
      "L'enregistrement de la commande a echoué"
    );
  }
}
