import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeYrAnnualizedComponent } from './three-yr-annualized.component';

describe('ThreeYrAnnualizedComponent', () => {
  let component: ThreeYrAnnualizedComponent;
  let fixture: ComponentFixture<ThreeYrAnnualizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeYrAnnualizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeYrAnnualizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
