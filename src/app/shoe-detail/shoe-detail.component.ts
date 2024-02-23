import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoeDTO } from '../shoe-dto.model';
import { ShoeService } from '../shoe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-shoe-detail',
  templateUrl: './shoe-detail.component.html',
  styleUrls: ['./shoe-detail.component.css']
})
export class ShoeDetailComponent implements OnInit {
  shoe: ShoeDTO = { id: '', brand: '', model: '', price: 0 };
  updateShoe: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private shoeService: ShoeService,
    private popupService: PopupService
  ) {
    this.updateShoe = this.fb.group({
      updatedBrand: ['', Validators.required],
      updatedModel: ['', Validators.required],
      updatedPrice: ['', Validators.min(0)],
    });

  }

  ngOnInit() {      
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.shoeService.getShoeById(id).subscribe(shoe => {
        this.shoe = shoe;
      });
    });
  }

  cancelButton(){
    this.router.navigate(['/shoes']);
  }

  goUpdate(){    
    if(this.updateShoe.valid){
      const updatedBrand = this.updateShoe.get('updatedBrand')?.value;
      const updatedModel = this.updateShoe.get('updatedModel')?.value;
      const updatedPrice = this.updateShoe.get('updatedPrice')?.value;

      const updatedShoeData = {
        brand: updatedBrand,
        model: updatedModel,
        price: updatedPrice
      };

      if (this.shoe.id) {
        this.shoeService.updateShoe(this.shoe.id, updatedShoeData).subscribe({
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

