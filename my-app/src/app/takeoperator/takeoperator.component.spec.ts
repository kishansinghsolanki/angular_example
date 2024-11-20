import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeoperatorComponent } from './takeoperator.component';

describe('TakeoperatorComponent', () => {
  let component: TakeoperatorComponent;
  let fixture: ComponentFixture<TakeoperatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeoperatorComponent]
    });
    fixture = TestBed.createComponent(TakeoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
