import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ListeCommandeComponent } from './components/liste-commande/liste-commande.component';
import { AddCommandeComponent } from './components/add-commande/add-commande.component';
import { WellcomeComponent } from './components/wellcome/wellcome.component';
import { FormsModule } from '@angular/forms';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzDragService } from 'ng-zorro-antd/core/services';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

registerLocaleData(fr);



@NgModule({
  declarations: [
    AppComponent,
    ListeCommandeComponent,
    AddCommandeComponent,
    WellcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NzNotificationModule

  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }

