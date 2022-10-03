import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forgetpage2Component } from './forgetpage2.component';

describe('Forgetpage2Component', () => {
  let component: Forgetpage2Component;
  let fixture: ComponentFixture<Forgetpage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forgetpage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Forgetpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
