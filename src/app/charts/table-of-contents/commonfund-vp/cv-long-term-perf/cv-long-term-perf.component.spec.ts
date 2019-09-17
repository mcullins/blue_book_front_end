import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvLongTermPerfComponent } from './cv-long-term-perf.component';

describe('CvLongTermPerfComponent', () => {
  let component: CvLongTermPerfComponent;
  let fixture: ComponentFixture<CvLongTermPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvLongTermPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvLongTermPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
