import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Servicio } from '../services/servicio';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{

  pokemones: any[] = [];

  constructor(private servicio: Servicio) {}

  ngOnInit() {

    this.servicio.obtenerLista().subscribe((data: any) => {

      data.results.forEach((pokemon: any) => {

        this.servicio.obtenerDetalle(pokemon.url)
          .subscribe((detalle: any) => {

            this.pokemones.push(detalle);

          });

      });

    });

  }

}
