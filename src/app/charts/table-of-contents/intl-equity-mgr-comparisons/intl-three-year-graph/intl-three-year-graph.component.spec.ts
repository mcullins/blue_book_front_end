import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntlThreeYearGraphComponent } from './intl-three-year-graph.component';

describe('IntlThreeYearGraphComponent', () => {
  let component: IntlThreeYearGraphComponent;
  let fixture: ComponentFixture<IntlThreeYearGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntlThreeYearGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntlThreeYearGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
