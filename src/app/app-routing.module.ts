import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRolesComponent } from './components/add-roles/add-roles.component';
import { RolesListComponent } from './components/roles-list/roles-list.component';
import { RolesDetailsComponent } from './components/roles-details/roles-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'roles', pathMatch: 'full' },
  { path: 'roles', component: RolesListComponent },
  { path: 'roles/:id', component: RolesDetailsComponent },
  { path: 'add', component: AddRolesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
