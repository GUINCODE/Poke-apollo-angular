import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { GET_COMMANDES } from './queries';

@Injectable({
  providedIn: 'root'
})
export class CommadeService {

  constructor(private apollo: Apollo) { }

   getCommandes(){
    return this.apollo
      .watchQuery<any>({
        query: GET_COMMANDES,
      })
   }
}
