import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegsitrationComponent } from './regsitration.component';

describe('RegsitrationComponent', () => {
  let component: RegsitrationComponent;
  let fixture: ComponentFixture<RegsitrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegsitrationComponent]
    });
    fixture = TestBed.createComponent(RegsitrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
