import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ListeCommandeComponent } from './liste-commande/liste-commande.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeCommandeComponent,
    AddCommandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
