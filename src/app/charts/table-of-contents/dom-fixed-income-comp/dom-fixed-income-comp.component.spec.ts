import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomFixedIncomeCompComponent } from './dom-fixed-income-comp.component';

describe('DomFixedIncomeCompComponent', () => {
  let component: DomFixedIncomeCompComponent;
  let fixture: ComponentFixture<DomFixedIncomeCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomFixedIncomeCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomFixedIncomeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
