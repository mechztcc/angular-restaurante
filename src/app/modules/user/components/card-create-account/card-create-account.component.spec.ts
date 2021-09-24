import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCreateAccountComponent } from './card-create-account.component';

describe('CardCreateAccountComponent', () => {
  let component: CardCreateAccountComponent;
  let fixture: ComponentFixture<CardCreateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCreateAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
