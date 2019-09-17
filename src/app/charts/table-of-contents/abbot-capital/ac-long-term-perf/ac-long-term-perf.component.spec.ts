import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcLongTermPerfComponent } from './ac-long-term-perf.component';

describe('AcLongTermPerfComponent', () => {
  let component: AcLongTermPerfComponent;
  let fixture: ComponentFixture<AcLongTermPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcLongTermPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcLongTermPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
