import { Component } from '@angular/core';
import { ShoeService } from '../app/shoe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  newShoe: any = {};
  updateShoeForm: FormGroup;

  constructor(private shoeService: ShoeService, private fb: FormBuilder) {
    this.updateShoeForm = this.fb.group({
      updatedBrand: ['', Validators.required],
      updatedModel: ['', Validators.required],
      updatedPrice: [0, Validators.min(0)],
    });
  }

  onCreateShoe(): void {
    this.shoeService.createShoe(this.newShoe).subscribe((response) => {
      console.log('New shoe created successfully:', response);
    });
  }

  onUpdateShoe(shoeId: string): void {
    const updatedShoeData = this.updateShoeForm.value;
    this.shoeService.updateShoe(shoeId, updatedShoeData).subscribe((response) => {
      console.log('Shoe updated successfully:', response);
    });
  }

  onDeleteShoe(shoeId: string): void {
    this.shoeService.deleteShoe(shoeId).subscribe(() => {
      console.log('Shoe deleted successfully');
    });
  }
}
