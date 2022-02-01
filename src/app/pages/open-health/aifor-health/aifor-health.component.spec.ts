import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIForHealthComponent } from './aifor-health.component';

describe('AIForHealthComponent', () => {
  let component: AIForHealthComponent;
  let fixture: ComponentFixture<AIForHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AIForHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AIForHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
