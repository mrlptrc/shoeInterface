import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoeService } from '../shoe.service';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-shoe-update',
  templateUrl: './shoe-update.component.html',
  styleUrls: ['./shoe-update.component.css'],
})

export class ShoeUpdateComponent implements OnInit {
  updateShoeForm: FormGroup;
  shoeIdToUpdate: string;

  constructor(
    private fb: FormBuilder, 
    private shoeService: ShoeService,
    public popupService: PopupService
    ){
    this.updateShoeForm = this.fb.group({
      updatedBrand: ['', Validators.required],
      updatedModel: ['', Validators.required],
      updatedPrice: ['', Validators.min(0)],
      shoeIdToUpdate: ['', Validators.required]
    });

    this.shoeIdToUpdate = "";
  }

  ngOnInit() {
    console.log('');
  }

  onUpdateShoeSubmit() {
    if (this.updateShoeForm.valid) {
      const updatedBrand = this.updateShoeForm.get('updatedBrand')?.value;
      const updatedModel = this.updateShoeForm.get('updatedModel')?.value;
      const updatedPrice = this.updateShoeForm.get('updatedPrice')?.value;
      const updatedShoeId = this.updateShoeForm.get('shoeIdToUpdate')?.value;

      const updatedShoeData = {
        brand: updatedBrand,
        model: updatedModel,
        price: updatedPrice
      };

        if (updatedShoeId) {
          this.shoeService.updateShoe(updatedShoeId, updatedShoeData).subscribe({
            next: (response) => {
              this.popupService.openPopup('Shoe updated successfully!', response);
            },
            error: (error) => {
              this.popupService.openPopup('An error ocurred updating a shoe.', error);
            }
          });
        }
    }
  }
}
