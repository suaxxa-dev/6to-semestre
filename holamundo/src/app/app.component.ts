import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'holamundo';
  tarea: string = '';
  lista: string[] = [];

  agregar() {
    if (this.tarea.trim() !== '') {
      this.lista.push(this.tarea);
      this.tarea = '';
    }
  }
}
