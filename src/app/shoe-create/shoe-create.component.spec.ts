import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoeCreateComponent } from './shoe-create.component';

describe('ShoeCreateComponent', () => {
  let component: ShoeCreateComponent;
  let fixture: ComponentFixture<ShoeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoeCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
