import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenhealthProjectsComponent } from './openhealth-projects.component';

describe('OpenhealthProjectsComponent', () => {
  let component: OpenhealthProjectsComponent;
  let fixture: ComponentFixture<OpenhealthProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenhealthProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenhealthProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
