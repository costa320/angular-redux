import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualElementComponent } from './visual-element.component';

describe('VisualElementComponent', () => {
  let component: VisualElementComponent;
  let fixture: ComponentFixture<VisualElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
