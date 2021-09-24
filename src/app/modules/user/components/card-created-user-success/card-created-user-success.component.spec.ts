import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreatedUserSuccessComponent } from './card-created-user-success.component';

describe('CardCreatedUserSuccessComponent', () => {
  let component: CardCreatedUserSuccessComponent;
  let fixture: ComponentFixture<CardCreatedUserSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCreatedUserSuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCreatedUserSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
