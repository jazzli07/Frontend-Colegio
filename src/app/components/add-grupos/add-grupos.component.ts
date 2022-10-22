import { Component, OnInit } from '@angular/core';
import { Grupos } from 'src/app/models/grupos.model';
import { GruposService } from 'src/app/services/grupos.service';

@Component({
  selector: 'app-add-grupos',
  templateUrl: './add-grupos.component.html',
  styleUrls: ['./add-grupos.component.css']
})
export class AddGruposComponent implements OnInit {

  grupos: Grupos = {
    grupo: '',
  };
  submitted = false;

  constructor(private gruposService: GruposService) { }

  ngOnInit(): void {
  }

  saveGrupo(): void {
    const data = {
      nombre: this.grupos.grupo,
    };

    this.gruposService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
    };

    newGrupo(): void {
      this.submitted = false;
      this.grupos = {
        grupo: '',
      };
    }

} 
