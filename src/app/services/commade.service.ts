import { _GET_ONE_COMMANDE } from "./../graphql/Query";
import { _DELETE_COMMAND, _UPDATE_COMMAND } from "./../graphql/Mutation";
import { _CREATE_COMMAND } from "../graphql/Mutation";
import { Apollo } from "apollo-angular";
import { Injectable } from "@angular/core";
import { _GET_COMMANDES } from "../graphql/Query";
import { Commande } from "../types/commandeType";

@Injectable({
  providedIn: "root",
})
export class CommadeService {
  constructor(private apollo: Apollo) {}

  getCommandes() {
    return this.apollo.watchQuery<any>({
      query: _GET_COMMANDES,
    });
  }
  getOneCommand(idCommande: number) {
    return this.apollo.watchQuery<any>({
      query: _GET_ONE_COMMANDE,
      variables: {
        id: idCommande,
      },
    });
  }

  addCommande(commande: Commande) {
    return this.apollo.mutate({
      mutation: _CREATE_COMMAND,
      variables: {
        newCommande: commande,
      },
    });
  }
  updateCommande(commande: Commande) {
    return this.apollo.mutate({
      mutation: _UPDATE_COMMAND,
      variables: {
        newCommande: commande,
      },
    });
  }

  removeCommande(idCommande: number) {
    return this.apollo.mutate({
      mutation: _DELETE_COMMAND,
      variables: {
        id: idCommande,
      },
    });
  }
}
