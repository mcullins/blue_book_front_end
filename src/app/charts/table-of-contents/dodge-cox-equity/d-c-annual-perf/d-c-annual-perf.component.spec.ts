import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DCAnnualPerfComponent } from './d-c-annual-perf.component';

describe('DCAnnualPerfComponent', () => {
  let component: DCAnnualPerfComponent;
  let fixture: ComponentFixture<DCAnnualPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DCAnnualPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DCAnnualPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
