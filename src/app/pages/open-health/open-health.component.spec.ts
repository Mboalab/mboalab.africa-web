import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenHealthComponent } from './open-health.component';

describe('OpenHealthComponent', () => {
  let component: OpenHealthComponent;
  let fixture: ComponentFixture<OpenHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
