import { Component,Input ,OnInit } from '@angular/core';
import { GruposService } from 'src/app/services/grupos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Grupos } from 'src/app/models/grupos.model';

@Component({
  selector: 'app-grupos-details',
  templateUrl: './grupos-details.component.html',
  styleUrls: ['./grupos-details.component.css']
})
export class GruposDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentGrupo: Grupos = {
    grupo: '',  
  };

  message = '';

  constructor(private GruposService: GruposService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void { 
    if (!this.viewMode){
      this.message = '';
      this.getGrupos(this.route.snapshot.params["id"]);
    }
  }

  getGrupos(id: string): void {
    this.GruposService.get(id)
      .subscribe({
        next: (data) => {
          this.currentGrupo = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateGrupos(): void {
    this.message = '';

    this.GruposService.update(this.currentGrupo.id_grupo, this.currentGrupo)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This grupo was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteGrupos(): void {
    this.GruposService.delete(this.currentGrupo.id_grupo)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/grupos']);
        },
        error: (e) => console.error(e)
      });
  }

}
