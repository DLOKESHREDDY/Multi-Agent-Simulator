// src/app/services/websocket.service.ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket'; // Import WebSocketSubject

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = new WebSocketSubject('ws://localhost:3000'); // Replace with your WebSocket URL
  }

  // Get WebSocket messages
  getMessages(): Observable<any> {
    return this.socket$.asObservable();
  }

  // Send message to WebSocket server
  sendMessage(message: any): void {
    this.socket$.next(message);
  }

  // Close WebSocket connection
  closeConnection(): void {
    this.socket$.complete();
  }
}
