import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoeComponent } from './shoe.component';

describe('ShoeComponent', () => {
  let component: ShoeComponent;
  let fixture: ComponentFixture<ShoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
