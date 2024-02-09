import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoeService } from '../shoe.service';

@Component({
  selector: 'app-shoe-update',
  templateUrl: './shoe-update.component.html',
  styleUrls: ['./shoe-update.component.css']
})

export class ShoeUpdateComponent implements OnInit {
  updateShoeForm: FormGroup;
  shoeIdToUpdate: string;

  constructor(private fb: FormBuilder, private shoeService: ShoeService) {
    this.updateShoeForm = this.fb.group({
      updatedBrand: ['', Validators.required],
      updatedModel: ['', Validators.required],
      updatedPrice: ['', Validators.min(0)],
      shoeIdToUpdate: ['', Validators.required]
    });

    this.shoeIdToUpdate = "";
  }

  ngOnInit() {
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

      if(updatedShoeId){
        this.shoeService.updateShoe(updatedShoeId, updatedShoeData).subscribe(
          (response) => {
            console.log(updatedShoeData, "dentro do subscribe");
            console.log('Shoe updated successfully:', response);
          },
          (error) => {
            console.error('Error updating shoe:', error);
          }
        );
     }
    }
  }
}
