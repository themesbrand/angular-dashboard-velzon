import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTopicAndMentorComponent } from './select-topic-and-mentor.component';

describe('SelectTopicAndMentorComponent', () => {
  let component: SelectTopicAndMentorComponent;
  let fixture: ComponentFixture<SelectTopicAndMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectTopicAndMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTopicAndMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
