import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoBeneficialBioComponent } from './logo-beneficial-bio.component';

describe('LogoBeneficialBioComponent', () => {
  let component: LogoBeneficialBioComponent;
  let fixture: ComponentFixture<LogoBeneficialBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoBeneficialBioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoBeneficialBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
