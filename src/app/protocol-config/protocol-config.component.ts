// src/app/components/protocol-config/protocol-config.component.ts
import { Component } from '@angular/core';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-protocol-config',
  templateUrl: './protocol-config.component.html',
  styleUrls: ['./protocol-config.component.css']
})
export class ProtocolConfigComponent {
  protocolData = {
    // Example protocol data (replace with your actual data)
    name: 'Protocol A',
    type: 'Type 1',
    version: '1.0',
  };

  constructor(private apiService: ApiService) {}

  startSimulation(): void {
    this.apiService.startSimulation(this.protocolData).subscribe((response) => {
      console.log('Simulation started:', response);
    });
  }
}
