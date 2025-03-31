// src/app/components/simulation-results/simulation-results.component.ts
import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './../services/websocket.service';



@Component({
  selector: 'app-simulation-results',
  templateUrl: './simulation-results.component.html',
  styleUrls: ['./simulation-results.component.css']
})
export class SimulationResultsComponent implements OnInit {
  simulationResults: any[] = [];

  constructor(private wsService: WebSocketService) {}

  ngOnInit(): void {
    // Subscribe to WebSocket messages
    this.wsService.getMessages().subscribe((data: any) => {
      this.simulationResults.push(data);
    });
  }
}
