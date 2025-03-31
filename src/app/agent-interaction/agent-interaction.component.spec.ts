import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentInteractionComponent } from './agent-interaction.component';

describe('AgentInteractionComponent', () => {
  let component: AgentInteractionComponent;
  let fixture: ComponentFixture<AgentInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentInteractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
