import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagerReviewComponent } from '@app/charts/table-of-contents/manager-review/manager-review.component';


describe('ManagerReviewComponent', () => {
  let component: ManagerReviewComponent;
  let fixture: ComponentFixture<ManagerReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
