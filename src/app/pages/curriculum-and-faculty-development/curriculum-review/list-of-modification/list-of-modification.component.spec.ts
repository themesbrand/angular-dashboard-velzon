import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfModificationComponent } from './list-of-modification.component';

describe('ListOfModificationComponent', () => {
  let component: ListOfModificationComponent;
  let fixture: ComponentFixture<ListOfModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfModificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
