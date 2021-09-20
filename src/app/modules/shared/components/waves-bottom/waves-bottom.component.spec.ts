import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavesBottomComponent } from './waves-bottom.component';

describe('WavesBottomComponent', () => {
  let component: WavesBottomComponent;
  let fixture: ComponentFixture<WavesBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavesBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WavesBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
