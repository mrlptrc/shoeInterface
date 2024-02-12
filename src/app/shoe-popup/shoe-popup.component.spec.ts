import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoePopupComponent } from './shoe-popup.component';

describe('ShoePopupComponent', () => {
  let component: ShoePopupComponent;
  let fixture: ComponentFixture<ShoePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoePopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
