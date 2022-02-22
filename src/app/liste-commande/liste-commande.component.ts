import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Apollo, gql } from "apollo-angular";

// We use the gql tag to parse our query string into a query document
const GET_COMMANDES = gql`
  query {
    commandes {
      numCommande
      libelle
      montantTotal
      entreprise {
        name
        adresse
        contactName {
          email
          fullName
          telephones {
            telephoneNumber
          }
        }
      }
      ficheInterventions {
        id
        dateCreation
        description
        statusFicheIntervention {
          labelle
        }
      }
      commandePersonnels {
        personnel {
          name
        }
        role {
          labelle
          isActive
        }
      }
    }
  }
`;
@Component({
  selector: "app-liste-commande",
  templateUrl: "./liste-commande.component.html",
  styleUrls: ["./liste-commande.component.scss"],
})
export class ListeCommandeComponent implements OnInit, OnDestroy {
  loading!: boolean;
  commandes: any;

  private querySubscription!: Subscription;
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: GET_COMMANDES,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.commandes = data.commandes;
        console.log(this.commandes);
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
