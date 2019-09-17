import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcAnnualPerfComponent } from './tc-annual-perf.component';

describe('TcAnnualPerfComponent', () => {
  let component: TcAnnualPerfComponent;
  let fixture: ComponentFixture<TcAnnualPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcAnnualPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcAnnualPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
