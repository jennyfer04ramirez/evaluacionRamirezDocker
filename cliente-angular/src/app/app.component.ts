import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebSocketService } from './servicios/WebSocket';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mensajes: string[] = [];

  mensaje:string = '';
  constructor(private ws: WebSocketService) {
    this.ws.getMessages().subscribe((message: any) => {
      this.mensajes.push(message);
    });

  }

  envairMensaje() {
    if (this.mensaje.trim()) {
      this.ws.sendMessage(this.mensaje);
      this.mensaje = '';
    }

  }
}
