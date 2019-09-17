import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalfundAttributionComponent } from './totalfund-attribution.component';

describe('TotalfundAttributionComponent', () => {
  let component: TotalfundAttributionComponent;
  let fixture: ComponentFixture<TotalfundAttributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalfundAttributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalfundAttributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
