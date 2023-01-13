import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reser2Component } from './reser2.component';

describe('Reser2Component', () => {
  let component: Reser2Component;
  let fixture: ComponentFixture<Reser2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Reser2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reser2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
