import { Component, OnInit } from '@angular/core';
import { ShoeService } from '../shoe.service';
import { Router } from '@angular/router';
import { ShoeDTO } from '../shoe-dto.model';
import { PopupService } from '../popup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.css'],
})

export class ShoeComponent implements OnInit {
  shoes: ShoeDTO[] = [];
  searchKeyword: string = '';
  exactMatch: boolean = false;
  showCreate: boolean = false;
  shoeForm: FormGroup;

  constructor(
    public popupService: PopupService,
    private shoeService: ShoeService,
    private router: Router,
    private fb: FormBuilder
    ) {
    this.shoeForm = this.fb.group({
      createBrand: ['', Validators.required],
      createModel: ['', Validators.required],
      createPrice: ['', Validators.min(0)],
    });
  }

  ngOnInit(): void {
    console.log("ngOn init");
  }

  deleteShoe(id: string) {
    this.shoeService.deleteShoe(id).subscribe({
      next: (response) => {
        console.log('Shoe deleted successfully:', response);
      },
      error: (error) => {
        console.error('Error deleting shoe:', error);
      }
    });
  }

  onCreateSubmit() {
    console.log("funfando fora", this.shoeForm.value);
    if (this.shoeForm.valid) {
      const shoeData = this.shoeForm.value;
      console.log("funfando dentro", shoeData);
      
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

  searchItem() {
    this.shoeService.searchShoes(this.searchKeyword, this.exactMatch).subscribe({
      next: (data) => {
        this.shoes = data;
      },
      error: (error) => {
        console.error('Error searching shoes:', error);
      }
    });
  }

  redirectToShoeDetail(shoeId: string) {
    this.router.navigate(['/shoes', shoeId]);
  }

  toggleCreate() {
    this.showCreate = !this.showCreate;
  }
}
