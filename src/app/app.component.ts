import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent} from './pokemon/pokemon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokemonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokeapi';
}