import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { _GET_ENTREPRISES } from '../queries/Query';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor(private apollo: Apollo) { }

    getEntreprises(){
    return this.apollo
      .watchQuery<any>({
        query: _GET_ENTREPRISES,
      })
   }
}
