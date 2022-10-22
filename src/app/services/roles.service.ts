import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Roles } from '../models/roles.model';

const baseUrl = 'http://localhost:3000/roles';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Roles[]> {
    return this.http.get<Roles[]>(baseUrl);
  }

  get(id_rol: any): Observable<Roles> {
    return this.http.get<Roles>(`${baseUrl}/${id_rol}`); 
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id_rol: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id_rol}`, data);
  }

  delete(id_rol: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id_rol}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByNombre(nombre: any): Observable<Roles[]> {
    return this.http.get<Roles[]>(`${baseUrl}?nombre=${nombre}`);
  }
}
