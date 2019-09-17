import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodgeCoxEquityComponent } from './dodge-cox-equity.component';

describe('DodgeCoxEquityComponent', () => {
  let component: DodgeCoxEquityComponent;
  let fixture: ComponentFixture<DodgeCoxEquityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodgeCoxEquityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodgeCoxEquityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
