import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiotechComponent } from './biotech.component';

describe('BiotechComponent', () => {
  let component: BiotechComponent;
  let fixture: ComponentFixture<BiotechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiotechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiotechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
