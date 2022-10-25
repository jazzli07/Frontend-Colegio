import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TiposDeContactos } from '../models/tipos-de-contactos.model';

const baseUrl = 'http://localhost:3000/tipos-de-contacto';

@Injectable({
  providedIn: 'root'
})
export class TipoDeContactoService {

  constructor(private http: HttpClient) { } 

  getAll(): Observable<TiposDeContactos[]> {
    return this.http.get<TiposDeContactos[]>(baseUrl);
  }

  get(id_tipo: any): Observable<TiposDeContactos> {
    return this.http.get<TiposDeContactos>(`${baseUrl}/${id_tipo}`); 
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id_tipo: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id_tipo}`, data);
  }

  delete(id_tipo: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id_tipo}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByNombre(nombre: any): Observable<TiposDeContactos[]> {
    return this.http.get<TiposDeContactos[]>(`${baseUrl}?nombre=${nombre}`);
  }
}
