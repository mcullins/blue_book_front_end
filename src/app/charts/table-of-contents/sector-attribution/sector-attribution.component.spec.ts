import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorAttributionComponent } from './sector-attribution.component';

describe('SectorAttributionComponent', () => {
  let component: SectorAttributionComponent;
  let fixture: ComponentFixture<SectorAttributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorAttributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorAttributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
