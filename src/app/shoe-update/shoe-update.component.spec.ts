import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoeUpdateComponent } from './shoe-update.component';

describe('ShoeUpdateComponent', () => {
  let component: ShoeUpdateComponent;
  let fixture: ComponentFixture<ShoeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoeUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
