import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpassComponent } from './userpass.component';

describe('UserpassComponent', () => {
  let component: UserpassComponent;
  let fixture: ComponentFixture<UserpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
