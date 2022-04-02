import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoShutterworthComponent } from './logo-shutterworth.component';

describe('LogoShutterworthComponent', () => {
  let component: LogoShutterworthComponent;
  let fixture: ComponentFixture<LogoShutterworthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoShutterworthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoShutterworthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
