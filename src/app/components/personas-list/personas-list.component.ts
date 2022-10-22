import { Component, OnInit } from '@angular/core';
import { Personas } from 'src/app/models/personas.model';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-personas-list',
  templateUrl: './personas-list.component.html',
  styleUrls: ['./personas-list.component.css']
})
export class PersonasListComponent implements OnInit {

  personas?: Personas[];
  currentPersona: Personas = {};
  currentIndex = -1;
  nombres = '';

  constructor(private PersonasService: PersonasService) { }

  ngOnInit(): void {
    this.retrievePersonas();
  } 

  retrievePersonas(): void {
    this.PersonasService.getAll()
      .subscribe({
        next: (data) => {
          this.personas = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrievePersonas();
    this.currentPersona = {};
    this.currentIndex = -1;
  }

  setActivePersonas(personas: Personas, index: number): void {
    this.currentPersona = personas;
    this.currentIndex = index;
  }

  removeAllPersonas(): void {
    this.PersonasService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchNombre(): void {
    this.currentPersona = {};
    this.currentIndex = -1;

    this.PersonasService.findByNombre(this.nombres)
      .subscribe({
        next: (data) => {
          this.personas = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
