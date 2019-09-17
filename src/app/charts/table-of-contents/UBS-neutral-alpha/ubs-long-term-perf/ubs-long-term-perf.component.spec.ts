import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbsLongTermPerfComponent } from './ubs-long-term-perf.component';

describe('UbsLongTermPerfComponent', () => {
  let component: UbsLongTermPerfComponent;
  let fixture: ComponentFixture<UbsLongTermPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbsLongTermPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbsLongTermPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
