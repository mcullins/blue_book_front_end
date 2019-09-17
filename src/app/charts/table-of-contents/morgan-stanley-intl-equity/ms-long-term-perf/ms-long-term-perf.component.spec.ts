import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsLongTermPerfComponent } from './ms-long-term-perf.component';

describe('MsLongTermPerfComponent', () => {
  let component: MsLongTermPerfComponent;
  let fixture: ComponentFixture<MsLongTermPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsLongTermPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsLongTermPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
