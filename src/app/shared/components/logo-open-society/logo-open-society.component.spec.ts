import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoOpenSocietyComponent } from './logo-open-society.component';

describe('LogoOpenSocietyComponent', () => {
  let component: LogoOpenSocietyComponent;
  let fixture: ComponentFixture<LogoOpenSocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoOpenSocietyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoOpenSocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
