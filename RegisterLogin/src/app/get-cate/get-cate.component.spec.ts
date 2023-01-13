import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCateComponent } from './get-cate.component';

describe('GetCateComponent', () => {
  let component: GetCateComponent;
  let fixture: ComponentFixture<GetCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
