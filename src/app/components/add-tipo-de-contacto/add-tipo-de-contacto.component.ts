import { Component, OnInit } from '@angular/core';
import { TiposDeContactos } from 'src/app/models/tipos-de-contactos.model';
import { TipoDeContactoService } from 'src/app/services/tipo-de-contacto.service';

@Component({
  selector: 'app-add-tipo-de-contacto',
  templateUrl: './add-tipo-de-contacto.component.html',
  styleUrls: ['./add-tipo-de-contacto.component.css']
})
export class AddTipoDeContactoComponent implements OnInit {

  tiposdecontactos: TiposDeContactos = {
    nombre: '',
  };
  submitted = false;

  constructor(private tiposdecontactosService: TipoDeContactoService) { }

  ngOnInit(): void { 
  }

  saveTiposC(): void {
    const data = {
      nombre: this.tiposdecontactos.nombre,
    };

    this.tiposdecontactosService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
    };

    newTipoC(): void {
      this.submitted = false;
      this.tiposdecontactos = {
        nombre: '',
      };
    }

}
