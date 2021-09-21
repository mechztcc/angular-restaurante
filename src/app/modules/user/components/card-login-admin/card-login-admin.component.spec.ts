import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLoginAdminComponent } from './card-login-admin.component';

describe('CardLoginAdminComponent', () => {
  let component: CardLoginAdminComponent;
  let fixture: ComponentFixture<CardLoginAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLoginAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLoginAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
