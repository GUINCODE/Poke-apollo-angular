import { Commande } from './../../types/commandeType';
import { NzModalService } from 'ng-zorro-antd/modal';
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
    isDelete:any


  private querySubscription!: Subscription;
  constructor(private commandeService: CommadeService,   private modal: NzModalService) {}

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

  removeCommande(id: number)  {

  this.commandeService.removeCommande(id).subscribe(
    ({data}) => {
      this.isDelete = data
      console.log(this.isDelete);

      if (this.isDelete.deleteCommande=='deleted') {
      this.commandes = this.commandes.filter((obj: { id: number; }) => obj.id !== id);
      }
    },
      (error) => {
        console.log(`error: ${error}`);
      }
  )
    return true
  }

  showDeleteConfirm(idCommande: number): void {
    this.modal.confirm({
      nzTitle: 'La suppression est définitive !',
      nzContent: '<span style="color: red;">Vous etes sur de vouloir supprimer cette commande</span>',
      nzOkText: 'Oui',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () =>this.removeCommande(idCommande),
      nzCancelText: 'Annuler',
      nzOnCancel: () => console.log('Cancel')
    });
  }

}
