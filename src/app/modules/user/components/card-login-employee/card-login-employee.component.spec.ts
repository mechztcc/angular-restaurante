import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLoginEmployeeComponent } from './card-login-employee.component';

describe('CardLoginEmployeeComponent', () => {
  let component: CardLoginEmployeeComponent;
  let fixture: ComponentFixture<CardLoginEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLoginEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLoginEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
