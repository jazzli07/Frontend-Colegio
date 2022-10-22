import { Component, OnInit } from '@angular/core';
import { Grupos } from 'src/app/models/grupos.model';
import { GruposService } from 'src/app/services/grupos.service';


@Component({
  selector: 'app-grupos-list',
  templateUrl: './grupos-list.component.html',
  styleUrls: ['./grupos-list.component.css']
})
export class GruposListComponent implements OnInit {

  grupos?: Grupos[];
  currentGrupo: Grupos = {};
  currentIndex = -1;
  grupo = '';

  constructor(private GruposService: GruposService) { }

  ngOnInit(): void {
    this.retrieveGrupos();
  }

  retrieveGrupos(): void {
    this.GruposService.getAll()
      .subscribe({
        next: (data) => {
          this.grupos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveGrupos();
    this.currentGrupo = {};
    this.currentIndex = -1;
  }

  setActiveGrupos(grupos: Grupos, index: number): void {
    this.currentGrupo = grupos;
    this.currentIndex = index;
  }

  searchNombre(): void {
    this.currentGrupo = {};
    this.currentIndex = -1;

    this.GruposService.findByNombre(this.grupo)
      .subscribe({
        next: (data) => {
          this.grupos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


} 
