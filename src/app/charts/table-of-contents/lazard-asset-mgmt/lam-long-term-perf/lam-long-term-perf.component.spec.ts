import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LamLongTermPerfComponent } from './lam-long-term-perf.component';

describe('LamLongTermPerfComponent', () => {
  let component: LamLongTermPerfComponent;
  let fixture: ComponentFixture<LamLongTermPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LamLongTermPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LamLongTermPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
