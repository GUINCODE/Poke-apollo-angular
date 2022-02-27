import { gql } from 'apollo-angular';

export const _GET_ONE_COMMANDE= gql `
query ($id:Int!){
   commandes( where:
    {id: {eq: $id}}) {
    id
    libelle
    montantTotal
    numCommande
    entrepriseId
  }
}`
export const   _GET_ENTREPRISES = gql`
 query{
  entreprises{
    id
    name
    adresse
  }
}
`;
export const   _GET_COMMANDES = gql`
  query {
    commandes {
      id
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
