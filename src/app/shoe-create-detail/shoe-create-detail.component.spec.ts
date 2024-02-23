import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeCreateDetailComponent } from './shoe-create-detail.component';

describe('ShoeCreateDetailComponent', () => {
  let component: ShoeCreateDetailComponent;
  let fixture: ComponentFixture<ShoeCreateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoeCreateDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShoeCreateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
