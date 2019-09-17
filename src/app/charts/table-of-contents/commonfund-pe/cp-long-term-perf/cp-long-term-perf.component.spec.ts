import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpLongTermPerfComponent } from './cp-long-term-perf.component';

describe('CpLongTermPerfComponent', () => {
  let component: CpLongTermPerfComponent;
  let fixture: ComponentFixture<CpLongTermPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpLongTermPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpLongTermPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
