import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduResourcesComponent } from './edu-resources.component';

describe('EduResourcesComponent', () => {
  let component: EduResourcesComponent;
  let fixture: ComponentFixture<EduResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
