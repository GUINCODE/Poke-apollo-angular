import { Entreprise } from './../../types/entrepriseType';
import { EntrepriseService } from './../../services/entreprise.service';
import { Commande } from "./../../types/commandeType";
import { Subscription } from "rxjs";
import { CommadeService } from "./../../services/commade.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';


@Component({
  selector: "app-update-commande",
  templateUrl: "./update-commande.component.html",
  styleUrls: ["./update-commande.component.scss"],
})
export class UpdateCommandeComponent implements OnInit {
  _entreprises!: Entreprise[]
      _isUpdated:any;
  _cmd: Commande = {
    id: 0,
    libelle: "",
    montantTotal: 0.0,
    numCommande: "",
    entrepriseId: 0,
  };

  private querySubscription!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private commandeService: CommadeService,
    private entrepriseService: EntrepriseService,
   private notification: NzNotificationService,
   private router: Router
  ) {}

  ngOnInit(): void {
      this.getEntreprises()
        const id: number = Number(this.route.snapshot.params.id); //methode One pour recuperer l'id qui se trouve dans le
        //  parametre de la route actuelle

        //methode 2:
    // this.route.paramMap.subscribe((params) => {
      // const b = params.get("id");
      // const id = Number(b);
      this.querySubscription = this.commandeService
        .getOneCommand(id)
        .valueChanges.subscribe(({ data, loading }) => {
          // cette methode enmpeche la modification des champs de la commande
          // data.commandes.forEach((item: Commande) => {
          //   this._cmd = item;
          // });
          for(let i = 0; i < data.commandes.length; i++) {
            this._cmd.id = data.commandes[i].id
            this._cmd.libelle = data.commandes[i].libelle
            this._cmd.montantTotal = data.commandes[i].montantTotal
            this._cmd.numCommande = data.commandes[i].numCommande
            this._cmd.entrepriseId = data.commandes[i].entrepriseId
          }
        });

    // });
  }
    getEntreprises() {
      this.querySubscription =  this.entrepriseService.getEntreprises().valueChanges.subscribe(({ data, loading }) => {
        this._entreprises = data.entreprises;
      });
}

  updateCommande(commande: Commande): boolean {

    this.commandeService.updateCommande(commande).subscribe(
      ({ data }) => {
        console.log(data);
        this._isUpdated=data
        if (this._isUpdated.updateCommande=='updated') {
          return true
        }
        else  {
          return false
        }
      },
      (error) => {
        console.log(`error: ${error}`);
      }
    );
    return false;
  }

  onSubmit(form: NgForm) {
     const isNotSuccess = this.updateCommande(this._cmd)
      if (!isNotSuccess) {
        // form.resetForm()
        setTimeout(() => {
           this.router.navigate(['/']);
        }, 1000);
        this.createNotificationSucces('success')
      } else {
           this.createNotificationError('error')
      }
   }

   createNotificationSucces(type: string): void {
    this.notification.create(
      type,
      'Updated ',
      "Mise à jour  effectuée !!!"
    );
  }
   createNotificationError(type: string): void {
    this.notification.create(
      type,
      "Error",
      "La mise à jour a echouée"
    );
  }
}
