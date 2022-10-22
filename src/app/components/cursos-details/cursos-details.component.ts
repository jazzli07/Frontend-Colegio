import { Component, Input,OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos } from 'src/app/models/cursos.model';

@Component({
  selector: 'app-cursos-details',
  templateUrl: './cursos-details.component.html',
  styleUrls: ['./cursos-details.component.css']
})

export class CursosDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentCurso: Cursos = {
    nombre: '',
    descripcion: '',
  };

  message = '';

  constructor(private CursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode){
      this.message = '';
      this.getCursos(this.route.snapshot.params["id"]);
    }
  }

  getCursos(id: string): void {
    this.CursosService.get(id)
      .subscribe({
        next: (data) => {
          this.currentCurso = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateCursos(): void {
    this.message = '';

    this.CursosService.update(this.currentCurso.id_curso, this.currentCurso)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Este curso fue actualizado!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteCursos(): void {
    this.CursosService.delete(this.currentCurso.id_curso)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/cursos']);
        },
        error: (e) => console.error(e)
      });
  }
}
