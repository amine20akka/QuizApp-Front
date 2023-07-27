import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorrectComponent } from './incorrect.component';

describe('IncorrectComponent', () => {
  let component: IncorrectComponent;
  let fixture: ComponentFixture<IncorrectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncorrectComponent]
    });
    fixture = TestBed.createComponent(IncorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
