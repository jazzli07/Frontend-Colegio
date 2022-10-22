import { Component, OnInit } from '@angular/core';
import { TiposDeContactos } from 'src/app/models/tipos-de-contactos.model';
import { TipoDeContactoService } from 'src/app/services/tipo-de-contacto.service';

@Component({
  selector: 'app-tipo-c-list',
  templateUrl: './tipo-c-list.component.html',
  styleUrls: ['./tipo-c-list.component.css']
})
export class TipoCListComponent implements OnInit {

  TipoC?: TiposDeContactos[];
  currentTipoC: TiposDeContactos = {};
  currentIndex = -1;
  nombre = '';

  constructor(private TipoDeContactoService: TipoDeContactoService) { }

  ngOnInit(): void {
    this.retrieveTipoC();
  }

  retrieveTipoC(): void {
    this.TipoDeContactoService.getAll()
      .subscribe({
        next: (data) => {
          this.TipoC = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveTipoC();
    this.currentTipoC = {};
    this.currentIndex = -1;
  }

  setActiveTipoC(tipoc: TiposDeContactos, index: number): void {
    this.currentTipoC = tipoc;
    this.currentIndex = index;
  }

  removeAllTipoC(): void {
    this.TipoDeContactoService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchNombre(): void {
    this.currentTipoC = {};
    this.currentIndex = -1;

    this.TipoDeContactoService.findByNombre(this.nombre)
      .subscribe({
        next: (data) => {
          this.TipoC = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


}
 