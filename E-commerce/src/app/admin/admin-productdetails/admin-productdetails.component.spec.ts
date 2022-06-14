import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductdetailsComponent } from './admin-productdetails.component';

describe('AdminProductdetailsComponent', () => {
  let component: AdminProductdetailsComponent;
  let fixture: ComponentFixture<AdminProductdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
