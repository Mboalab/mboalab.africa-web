import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeHubComponent } from './knowledge-hub.component';

describe('KnowledgeHubComponent', () => {
  let component: KnowledgeHubComponent;
  let fixture: ComponentFixture<KnowledgeHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
