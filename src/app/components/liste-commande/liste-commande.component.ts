import { CommadeService } from '../../services/commade.service';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";


@Component({
  selector: "app-liste-commande",
  templateUrl: "./liste-commande.component.html",
  styleUrls: ["./liste-commande.component.scss"],
})
export class ListeCommandeComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  commandes: any;

  private querySubscription!: Subscription;
  constructor(private commandeService: CommadeService) {}

  ngOnInit() {
     this.getCommandes()
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

   getCommandes() {
      this.querySubscription =  this.commandeService.getCommandes().valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.commandes = data.commandes;
        // // console.log(this.commandes);
        //  // console.log(loading);
      });
   }



  // //  getCommandes() {
  // //   this.querySubscription = this.apollo
  // //     .watchQuery<any>({
  // //       query: GET_COMMANDES,
  // //     })
  // //     .valueChanges.subscribe(({ data, loading }) => {
  // //       this.loading = loading;
  // //       this.commandes = data.commandes;
  // //       console.log(this.commandes);
  ////  });
  // //  }
}
