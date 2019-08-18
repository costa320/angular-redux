import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFromsComponent } from './control-froms.component';

describe('ControlFromsComponent', () => {
  let component: ControlFromsComponent;
  let fixture: ComponentFixture<ControlFromsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlFromsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlFromsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
