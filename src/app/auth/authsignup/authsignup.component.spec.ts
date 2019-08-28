import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthsignupComponent } from './authsignup.component';

describe('AuthsignupComponent', () => {
  let component: AuthsignupComponent;
  let fixture: ComponentFixture<AuthsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
