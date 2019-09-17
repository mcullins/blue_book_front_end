import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelToTotfundunivComponent } from './rel-to-totfunduniv.component';

describe('RelToTotfundunivComponent', () => {
  let component: RelToTotfundunivComponent;
  let fixture: ComponentFixture<RelToTotfundunivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelToTotfundunivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelToTotfundunivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
