import { Component, OnInit } from '@angular/core';
import { Personas } from 'src/app/models/personas.model';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-add-personas',
  templateUrl: './add-personas.component.html',
  styleUrls: ['./add-personas.component.css']
})
export class AddPersonasComponent implements OnInit {

  personas: Personas = {
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

  submitted = false;

  constructor(private personasService: PersonasService ) { }

  ngOnInit(): void {
  } 

  savePersonas(): void {
    const data = {
      cui: this.personas.cui,
      correo: this.personas.correo,
      nombres: this.personas.nombres,
      apellidos: this.personas.apellidos,
      nombreCompleto: this.personas.nombreCompleto,
      genero: this.personas.genero,
      fechaNacimiento: this.personas.fechaNacimiento,
      direccion: this.personas.direccion,
      esta_activo: this.personas.esta_activo
    };

    this.personasService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
    };

    newPersona(): void {
      this.submitted = false;
      this.personas = {
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
    }


}
