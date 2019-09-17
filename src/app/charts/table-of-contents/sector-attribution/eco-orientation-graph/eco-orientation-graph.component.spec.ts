import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoOrientationGraphComponent } from './eco-orientation-graph.component';

describe('EcoOrientationGraphComponent', () => {
  let component: EcoOrientationGraphComponent;
  let fixture: ComponentFixture<EcoOrientationGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcoOrientationGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoOrientationGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
