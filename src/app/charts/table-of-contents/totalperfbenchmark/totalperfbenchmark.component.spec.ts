import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalperfbenchmarkComponent } from './totalperfbenchmark.component';

describe('TotalperfbenchmarkComponent', () => {
  let component: TotalperfbenchmarkComponent;
  let fixture: ComponentFixture<TotalperfbenchmarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalperfbenchmarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalperfbenchmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
