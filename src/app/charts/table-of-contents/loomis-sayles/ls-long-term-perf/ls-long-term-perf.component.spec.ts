import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LsLongTermPerfComponent } from './ls-long-term-perf.component';

describe('LsLongTermPerfComponent', () => {
  let component: LsLongTermPerfComponent;
  let fixture: ComponentFixture<LsLongTermPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsLongTermPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsLongTermPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
