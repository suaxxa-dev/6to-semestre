import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Servicio {

   private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=20';

  constructor(private http: HttpClient) {}


  obtenerLista() {
    return this.http.get(this.apiUrl);
  }

  obtenerDetalle(url: string) {
    return this.http.get(url);
  }

}