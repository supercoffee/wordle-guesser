import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadGameComponent } from './quad-game.component';

describe('QuadGameComponent', () => {
  let component: QuadGameComponent;
  let fixture: ComponentFixture<QuadGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuadGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
