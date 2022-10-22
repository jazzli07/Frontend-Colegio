import { Component,Input ,OnInit } from '@angular/core';
import { TipoDeContactoService } from 'src/app/services/tipo-de-contacto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TiposDeContactos } from 'src/app/models/tipos-de-contactos.model';

@Component({
  selector: 'app-tipo-c-details',
  templateUrl: './tipo-c-details.component.html',
  styleUrls: ['./tipo-c-details.component.css']
})
export class TipoCDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentTipoC: TiposDeContactos = {
    nombre: '',
  };

  message = '';

  constructor(private TipoDeContactoService: TipoDeContactoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void { 
    if (!this.viewMode){
      this.message = '';
      this.getTipoC(this.route.snapshot.params["id"]);
    }
  }

  getTipoC(id: string): void {
    this.TipoDeContactoService.get(id)
      .subscribe({
        next: (data) => {
          this.currentTipoC = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateTipoC(): void {
    this.message = '';

    this.TipoDeContactoService.update(this.currentTipoC.id_tipoc, this.currentTipoC)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tipo de contacto was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTipoC(): void {
    this.TipoDeContactoService.delete(this.currentTipoC.id_tipoc)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tipo_contacto']);
        },
        error: (e) => console.error(e)
      });
  }

}
