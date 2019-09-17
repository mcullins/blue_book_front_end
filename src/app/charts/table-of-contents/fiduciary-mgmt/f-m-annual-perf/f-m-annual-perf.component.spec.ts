import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FMAnnualPerfComponent } from './f-m-annual-perf.component';

describe('FMAnnualPerfComponent', () => {
  let component: FMAnnualPerfComponent;
  let fixture: ComponentFixture<FMAnnualPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FMAnnualPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FMAnnualPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
