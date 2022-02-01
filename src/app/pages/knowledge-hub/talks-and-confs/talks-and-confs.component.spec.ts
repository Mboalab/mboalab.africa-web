import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksAndConfsComponent } from './talks-and-confs.component';

describe('TalksAndConfsComponent', () => {
  let component: TalksAndConfsComponent;
  let fixture: ComponentFixture<TalksAndConfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalksAndConfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalksAndConfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
