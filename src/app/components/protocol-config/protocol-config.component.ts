import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { WebSocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-protocol-config',
  templateUrl: './protocol-config.component.html',
  styleUrls: ['./protocol-config.component.css'],
})
export class ProtocolConfigComponent {
  protocolForm: FormGroup;
  simulationResults: any[] = [];

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private wsService: WebSocketService
  ) {
    this.protocolForm = this.fb.group({
      name: [''],
      type: ['request-response'],
      latency: [100],
      agents: [5],
    });
  }

  // Start the simulation when form is submitted
  startSimulation(): void {
    this.apiService.startSimulation(this.protocolForm.value).subscribe(
      (response) => {
        console.log('Simulation started:', response);
      },
      (error) => {
        console.error('Error starting simulation:', error);
      }
    );
  }

  ngOnInit(): void {
    // Subscribe to WebSocket messages for real-time updates
    this.wsService.getMessages().subscribe((data: any) => {
      this.simulationResults.push(data);
      console.log('Simulation result received:', data);
    });
  }
}
