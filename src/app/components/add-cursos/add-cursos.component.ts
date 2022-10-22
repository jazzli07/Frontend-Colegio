import { Component } from '@angular/core';
import { Cursos } from 'src/app/models/cursos.model';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-add-cursos',
  templateUrl: './add-cursos.component.html',
  styleUrls: ['./add-cursos.component.css']
})
export class AddcursosComponent {

  cursos: Cursos = {
    nombre: '',
    descripcion: '',
  };
  submitted = false;

  constructor(private CursosService: CursosService) { }

  saveCursos(): void {
    const data = {
      nombre: this.cursos.nombre,
      descripcion: this.cursos.descripcion
    };

    this.CursosService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
    };

    newCursos(): void {
      this.submitted = false;
      this.cursos = {
        nombre: '',
        descripcion: '',
      };
    }

}
