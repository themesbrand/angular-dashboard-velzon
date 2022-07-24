import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaRequestComponent } from './agenda-request.component';

describe('AgendaRequestComponent', () => {
  let component: AgendaRequestComponent;
  let fixture: ComponentFixture<AgendaRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
