import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DCLongTermPerfComponent } from './d-c-long-term-perf.component';

describe('DCLongTermPerfComponent', () => {
  let component: DCLongTermPerfComponent;
  let fixture: ComponentFixture<DCLongTermPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DCLongTermPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DCLongTermPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
