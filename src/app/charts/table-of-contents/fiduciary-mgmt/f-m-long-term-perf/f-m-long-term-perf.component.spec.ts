import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FMLongTermPerfComponent } from './f-m-long-term-perf.component';

describe('FMLongTermPerfComponent', () => {
  let component: FMLongTermPerfComponent;
  let fixture: ComponentFixture<FMLongTermPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FMLongTermPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FMLongTermPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
