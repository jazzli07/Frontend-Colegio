import { Component, Input,OnInit } from '@angular/core';
import { RolesService } from 'src/app/services/roles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Roles } from 'src/app/models/roles.model';

@Component({
  selector: 'app-roles-details',
  templateUrl: './roles-details.component.html',
  styleUrls: ['./roles-details.component.css']
})
export class RolesDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentRol: Roles = {
    nombre: '',
    descripcion: '',
  };

  message = '';

  constructor(private RolesService: RolesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode){
      this.message = '';
      this.getRoles(this.route.snapshot.params["id"]);
    }
  }

  getRoles(id: string): void {
    this.RolesService.get(id)
      .subscribe({
        next: (data) => {
          this.currentRol = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateRoles(): void {
    this.message = '';

    this.RolesService.update(this.currentRol.id_rol, this.currentRol)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This rol was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteRoles(): void {
    this.RolesService.delete(this.currentRol.id_rol)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/roles']);
        },
        error: (e) => console.error(e)
      });
  }
}
