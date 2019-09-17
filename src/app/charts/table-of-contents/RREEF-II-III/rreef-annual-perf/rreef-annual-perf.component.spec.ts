import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RreefAnnualPerfComponent } from './rreef-annual-perf.component';

describe('RreefAnnualPerfComponent', () => {
  let component: RreefAnnualPerfComponent;
  let fixture: ComponentFixture<RreefAnnualPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RreefAnnualPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RreefAnnualPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
