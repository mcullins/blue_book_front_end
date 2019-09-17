import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalfundtargetComponent } from './totalfundtarget.component';

describe('TotalfundtargetComponent', () => {
  let component: TotalfundtargetComponent;
  let fixture: ComponentFixture<TotalfundtargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalfundtargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalfundtargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
