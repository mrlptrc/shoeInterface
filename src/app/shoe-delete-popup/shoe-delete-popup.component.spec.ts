import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeDeletePopupComponent } from './shoe-delete-popup.component';

describe('ShoeDeletePopupComponent', () => {
  let component: ShoeDeletePopupComponent;
  let fixture: ComponentFixture<ShoeDeletePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoeDeletePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoeDeletePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
