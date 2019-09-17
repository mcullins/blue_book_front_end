import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfToObjectivesComponent } from './perf-to-objectives.component';

describe('PerfToObjectivesComponent', () => {
  let component: PerfToObjectivesComponent;
  let fixture: ComponentFixture<PerfToObjectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfToObjectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfToObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
