import { gql } from 'apollo-angular';

export const _CREATE_COMMAND = gql`
mutation($newCommande: CommandeInput!){
  saveCommande(newCommande:$newCommande)
}`;
