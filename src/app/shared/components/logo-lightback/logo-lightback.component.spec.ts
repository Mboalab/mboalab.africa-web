import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoLightbackComponent } from './logo-lightback.component';

describe('LogoLightbackComponent', () => {
  let component: LogoLightbackComponent;
  let fixture: ComponentFixture<LogoLightbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoLightbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoLightbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
