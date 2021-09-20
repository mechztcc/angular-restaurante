import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WavesTopComponent } from './waves-top.component';

describe('WavesTopComponent', () => {
  let component: WavesTopComponent;
  let fixture: ComponentFixture<WavesTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WavesTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WavesTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
