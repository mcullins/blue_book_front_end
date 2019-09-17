import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RreefLongTermPerfComponent } from './rreef-long-term-perf.component';

describe('RreefLongTermPerfComponent', () => {
  let component: RreefLongTermPerfComponent;
  let fixture: ComponentFixture<RreefLongTermPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RreefLongTermPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RreefLongTermPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
