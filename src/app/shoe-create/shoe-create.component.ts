import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoeService } from '../shoe.service';
import { PopupService } from '../popup.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-shoe-create',
  templateUrl: './shoe-create.component.html',
  styleUrl: './shoe-create.component.css',
})

export class ShoeCreateComponent {
  shoeForm: FormGroup;

  constructor(
    private popupService: PopupService,
    private formBuilder: FormBuilder, private shoeService: ShoeService) {
    this.shoeForm = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      price: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.shoeForm.valid) {
      const shoeData = this.shoeForm.value;
      this.shoeService.createShoe(shoeData).subscribe({
        next: (response) => {
      this.popupService.openPopup('Shoe Created Successfully!', response);
        },
        error: (error) => {
          this.popupService.openPopup('An error ocurred creating a shoe.', error);
        }
      });
    }
  }
}
