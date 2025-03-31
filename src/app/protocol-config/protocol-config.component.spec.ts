import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolConfigComponent } from './protocol-config.component';

describe('ProtocolConfigComponent', () => {
  let component: ProtocolConfigComponent;
  let fixture: ComponentFixture<ProtocolConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProtocolConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtocolConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
