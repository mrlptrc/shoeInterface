import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeDeleteComponent } from './shoe-delete.component';

describe('ShoeDeleteComponent', () => {
  let component: ShoeDeleteComponent;
  let fixture: ComponentFixture<ShoeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoeDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
