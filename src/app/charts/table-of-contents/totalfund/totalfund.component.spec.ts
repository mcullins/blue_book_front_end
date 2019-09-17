import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalfundComponent } from './totalfund.component';

describe('TotalfundComponent', () => {
  let component: TotalfundComponent;
  let fixture: ComponentFixture<TotalfundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalfundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
