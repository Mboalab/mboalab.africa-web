import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioManufacAndResearchComponent } from './bio-manufac-and-research.component';

describe('BioManufacAndResearchComponent', () => {
  let component: BioManufacAndResearchComponent;
  let fixture: ComponentFixture<BioManufacAndResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioManufacAndResearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BioManufacAndResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
