import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassdetailComponent } from './passdetail.component';

describe('PassdetailComponent', () => {
  let component: PassdetailComponent;
  let fixture: ComponentFixture<PassdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
