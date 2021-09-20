import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelectionLoginComponent } from './card-selection-login.component';

describe('CardSelectionLoginComponent', () => {
  let component: CardSelectionLoginComponent;
  let fixture: ComponentFixture<CardSelectionLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSelectionLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSelectionLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
