import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsEmergingLongTermPerfComponent } from './ms-emerging-long-term-perf.component';

describe('MsEmergingLongTermPerfComponent', () => {
  let component: MsEmergingLongTermPerfComponent;
  let fixture: ComponentFixture<MsEmergingLongTermPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsEmergingLongTermPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsEmergingLongTermPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
