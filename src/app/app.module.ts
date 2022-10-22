import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRolesComponent } from './components/add-roles/add-roles.component';
import { RolesListComponent } from './components/roles-list/roles-list.component';
import { RolesDetailsComponent } from './components/roles-details/roles-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AddPersonasComponent } from './components/add-personas/add-personas.component';
import { PersonasDetailsComponent } from './components/personas-details/personas-details.component';
import { PersonasListComponent } from './components/personas-list/personas-list.component';
import { AddTipoDeContactoComponent } from './components/add-tipo-de-contacto/add-tipo-de-contacto.component';
import { TipoCDetailsComponent } from './components/tipo-c-details/tipo-c-details.component';
import { TipoCListComponent } from './components/tipo-c-list/tipo-c-list.component';
import { AddGruposComponent } from './components/add-grupos/add-grupos.component';
import { GruposDetailsComponent } from './components/grupos-details/grupos-details.component';
import { GruposListComponent } from './components/grupos-list/grupos-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRolesComponent,
    RolesListComponent,
    RolesDetailsComponent,
    BarraLateralComponent,
    AddPersonasComponent,
    PersonasDetailsComponent,
    PersonasListComponent,
    AddTipoDeContactoComponent,
    TipoCDetailsComponent,
    TipoCListComponent,
    AddGruposComponent,
    GruposDetailsComponent,
    GruposListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
