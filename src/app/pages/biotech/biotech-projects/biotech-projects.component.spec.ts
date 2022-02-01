import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiotechProjectsComponent } from './biotech-projects.component';

describe('BiotechProjectsComponent', () => {
  let component: BiotechProjectsComponent;
  let fixture: ComponentFixture<BiotechProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiotechProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiotechProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
