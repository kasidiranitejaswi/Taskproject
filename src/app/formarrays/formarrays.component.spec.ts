import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormarraysComponent } from './formarrays.component';

describe('FormarraysComponent', () => {
  let component: FormarraysComponent;
  let fixture: ComponentFixture<FormarraysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormarraysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormarraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
