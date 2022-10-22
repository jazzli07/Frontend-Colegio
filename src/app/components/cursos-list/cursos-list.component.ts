import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import { Cursos } from 'src/app/models/cursos.model';  


@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
}) 
export class CursosListComponent implements OnInit {

  cursos?: Cursos[];
  currentCurso: Cursos = {};
  currentIndex = -1;
  nombre = '';

  constructor(private CursosService: CursosService) { }

  ngOnInit(): void {
    this.retrieveCursos();
  }

  retrieveCursos(): void {
    this.CursosService.getAll()
      .subscribe({
        next: (data) => {
          this.cursos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveCursos();
    this.currentCurso = {};
    this.currentIndex = -1;
  }

  setActiveRoles(cursos: Cursos, index: number): void {
    this.currentCurso = cursos;
    this.currentIndex = index;
  }

  removeAllRoles(): void {
    this.CursosService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchNombre(): void {
    this.currentCurso = {};
    this.currentIndex = -1;

    this.CursosService.findByNombre(this.nombre)
      .subscribe({
        next: (data) => {
          this.cursos = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
