import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProComponent } from './pro.component';

describe('ProComponent', () => {
  let component: ProComponent;
  let fixture: ComponentFixture<ProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProComponent]
    });
    fixture = TestBed.createComponent(ProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
