import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProComponent } from './new-pro.component';

describe('NewProComponent', () => {
  let component: NewProComponent;
  let fixture: ComponentFixture<NewProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProComponent]
    });
    fixture = TestBed.createComponent(NewProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
