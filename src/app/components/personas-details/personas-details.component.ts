import { Component, Input ,OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Personas } from 'src/app/models/personas.model';

@Component({
  selector: 'app-personas-details',
  templateUrl: './personas-details.component.html',
  styleUrls: ['./personas-details.component.css']
})
export class PersonasDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentPersona: Personas = {
    cui: '',
    correo: '',
    nombres: '',
    apellidos: '',
    nombreCompleto: '',
    genero: '',
    fechaNacimiento: new Date,
    edad: 0,
    direccion: '',
    esta_activo: false,   
  };

  message = '';

  constructor(private PersonasService: PersonasService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode){
      this.message = '';
      this.getPersonas(this.route.snapshot.params["id"]);
    }
  }

  getPersonas(id: string): void {
    this.PersonasService.get(id)
      .subscribe({
        next: (data) => {
          this.currentPersona = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePersonas(): void {
    this.message = '';

    this.PersonasService.update(this.currentPersona.id_persona, this.currentPersona)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This persona was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deletePersona(): void {
    this.PersonasService.delete(this.currentPersona.id_persona)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/personas']);
        },
        error: (e) => console.error(e)
      });
  }

} 
