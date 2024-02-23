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
    private formBuilder: FormBuilder
    ) {
    this.shoeForm = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      price: [null, Validators.required],
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
