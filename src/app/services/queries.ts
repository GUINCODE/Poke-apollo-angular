import { gql } from 'apollo-angular';

export const   GET_COMMANDES = gql`
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
