import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Grupos } from '../models/grupos.model';

const baseUrl = 'http://localhost:3000/grupos';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Grupos[]> {
    return this.http.get<Grupos[]>(baseUrl);
  }

  get(id_grupo: any): Observable<Grupos> {
    return this.http.get<Grupos>(`${baseUrl}/${id_grupo}`); 
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id_grupo: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id_grupo}`, data);
  }

  delete(id_grupo: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id_grupo}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByNombre(grupo: any): Observable<Grupos[]> {
    return this.http.get<Grupos[]>(`${baseUrl}?grupo=${grupo}`);
  }
} 
