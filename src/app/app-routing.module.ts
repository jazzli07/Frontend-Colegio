import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRolesComponent } from './components/add-roles/add-roles.component';
import { RolesListComponent } from './components/roles-list/roles-list.component';
import { RolesDetailsComponent } from './components/roles-details/roles-details.component';

import { AddPersonasComponent } from './components/add-personas/add-personas.component';
import { PersonasListComponent } from './components/personas-list/personas-list.component';
import { PersonasDetailsComponent } from './components/personas-details/personas-details.component';

import { AddTipoDeContactoComponent } from './components/add-tipo-de-contacto/add-tipo-de-contacto.component';
import { TipoCListComponent } from './components/tipo-c-list/tipo-c-list.component';
import { TipoCDetailsComponent } from './components/tipo-c-details/tipo-c-details.component';

import { AddGruposComponent } from './components/add-grupos/add-grupos.component';
import { GruposListComponent } from './components/grupos-list/grupos-list.component';
import { GruposDetailsComponent } from './components/grupos-details/grupos-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'roles', pathMatch: 'full' },
  { path: 'roles', component: RolesListComponent },
  { path: 'roles/:id', component: RolesDetailsComponent },
  { path: 'add', component: AddRolesComponent },

  { path: '', redirectTo: 'personas', pathMatch: 'full' },
  { path: 'personas', component: PersonasListComponent },
  { path: 'personas/:id', component: PersonasDetailsComponent },
  { path: 'add_persona', component: AddPersonasComponent },

  { path: '', redirectTo: 'tipoC', pathMatch: 'full' },
  { path: 'tipoC', component: TipoCListComponent },
  { path: 'tipoC/:id', component: TipoCDetailsComponent },
  { path: 'add_tipoC', component: AddTipoDeContactoComponent },

  { path: '', redirectTo: 'grupos', pathMatch: 'full' },
  { path: 'grupos', component: GruposListComponent },
  { path: 'grupos/:id', component: GruposDetailsComponent },
  { path: 'add_grupo', component: AddGruposComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
