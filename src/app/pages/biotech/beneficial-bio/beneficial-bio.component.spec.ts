import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficialBioComponent } from './beneficial-bio.component';

describe('BeneficialBioComponent', () => {
  let component: BeneficialBioComponent;
  let fixture: ComponentFixture<BeneficialBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeneficialBioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficialBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
