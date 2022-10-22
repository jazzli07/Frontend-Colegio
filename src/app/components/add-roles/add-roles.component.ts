import { Component } from '@angular/core';
import { Roles } from 'src/app/models/roles.model';
import { RolesService } from 'src/app/services/roles.service';

@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.css']
})
export class AddRolesComponent {

  roles: Roles = {
    nombre: '',
    descripcion: '',
  };
  submitted = false;

  constructor(private rolesService: RolesService) { }

  saveRoles(): void {
    const data = {
      nombre: this.roles.nombre,
      descripcion: this.roles.descripcion
    };

    this.rolesService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
    };

    newRol(): void {
      this.submitted = false;
      this.roles = {
        nombre: '',
        descripcion: '',
      };
    }

}
