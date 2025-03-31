// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.example.com'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  // Example API call to start a simulation
  startSimulation(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/simulation/start`, data);
  }
}
