import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraPageComponent } from './extra-page.component';

describe('ExtraPageComponent', () => {
  let component: ExtraPageComponent;
  let fixture: ComponentFixture<ExtraPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraPageComponent]
    });
    fixture = TestBed.createComponent(ExtraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
