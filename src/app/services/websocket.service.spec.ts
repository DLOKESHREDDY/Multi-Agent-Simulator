import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket$: WebSocketSubject<any> = new WebSocketSubject('ws://localhost:3000');

  getMessages(): Observable<any> {
    return this.socket$.asObservable();
  }
}
