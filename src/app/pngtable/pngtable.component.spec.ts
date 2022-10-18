import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PngtableComponent } from './pngtable.component';

describe('PngtableComponent', () => {
  let component: PngtableComponent;
  let fixture: ComponentFixture<PngtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PngtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PngtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
