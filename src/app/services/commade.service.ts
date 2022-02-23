import { _CREATE_COMMAND } from './../queries/Mutation';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import {  _GET_COMMANDES } from '../queries/Query';
import { Commande } from '../types/commandeType';

@Injectable({
  providedIn: 'root'
})
export class CommadeService {

  constructor(private apollo: Apollo) { }

   getCommandes(){
    return this.apollo
      .watchQuery<any>({
        query: _GET_COMMANDES,
      })
   }

    addCommande(commande: Commande){
    // const newCommande: Commande = { id: parseInt(this.id), name: this.name, description: this.description, price: parseInt(this.price)}
   return  this.apollo.mutate({
      mutation: _CREATE_COMMAND,
      variables:{
        newCommande: commande
      }
    })
    }
}
