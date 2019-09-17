import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcAnnualPerfComponent } from './ac-annual-perf.component';

describe('AcAnnualPerfComponent', () => {
  let component: AcAnnualPerfComponent;
  let fixture: ComponentFixture<AcAnnualPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcAnnualPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcAnnualPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
