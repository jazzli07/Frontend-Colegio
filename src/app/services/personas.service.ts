import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personas } from '../models/personas.model';

const baseUrl = 'http://localhost:3000/personas';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Personas[]> {
    return this.http.get<Personas[]>(baseUrl);
  }

  get(id_rol: any): Observable<Personas> {
    return this.http.get<Personas>(`${baseUrl}/${id_rol}`); 
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id_persona: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id_persona}`, data);
  }

  delete(id_persona: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id_persona}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByNombre(nombre: any): Observable<Personas[]> {
    return this.http.get<Personas[]>(`${baseUrl}?nombre=${nombre}`);
  }
} 
