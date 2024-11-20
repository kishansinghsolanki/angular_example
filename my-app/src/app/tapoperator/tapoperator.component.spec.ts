import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapoperatorComponent } from './tapoperator.component';

describe('TapoperatorComponent', () => {
  let component: TapoperatorComponent;
  let fixture: ComponentFixture<TapoperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TapoperatorComponent]
    });
    fixture = TestBed.createComponent(TapoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
