import { Component, OnInit } from '@angular/core';
import { Roles } from 'src/app/models/roles.model';
import { RolesService } from 'src/app/services/roles.service';


@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  roles?: Roles[];
  currentRol: Roles = {};
  currentIndex = -1;
  nombre = '';

  constructor(private RolesService: RolesService) { }

  ngOnInit(): void {
    this.retrieveRoles();
  }

  retrieveRoles(): void {
    this.RolesService.getAll()
      .subscribe({
        next: (data) => {
          this.roles = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveRoles();
    this.currentRol = {};
    this.currentIndex = -1;
  }

  setActiveRoles(roles: Roles, index: number): void {
    this.currentRol = roles;
    this.currentIndex = index;
  }

  searchNombre(): void {
    this.currentRol = {};
    this.currentIndex = -1;

    this.RolesService.findByNombre(this.nombre)
      .subscribe({
        next: (data) => {
          this.roles = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
