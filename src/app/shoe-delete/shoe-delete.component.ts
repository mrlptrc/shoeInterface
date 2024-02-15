import { Component, OnInit } from '@angular/core';
import { ShoeService } from '../shoe.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PopupService } from '../popup.service';


@Component({
  selector: 'app-shoe-delete',
  templateUrl: './shoe-delete.component.html',
  styleUrls: ['./shoe-delete.component.css']
})

export class ShoeDeleteComponent implements OnInit {
  deleteShoeForm: FormGroup;

  constructor(
    private popupService: PopupService,
    private fb: FormBuilder, private shoeService: ShoeService) {
    this.deleteShoeForm = this.fb.group({
      shoeIdToDelete: ['']
    });  
  }

  ngOnInit() {
    console.log('');
  }

  onDeleteShoeSubmit() {
    const shoeIdToDelete = this.deleteShoeForm.get('shoeIdToDelete')?.value;
    if (shoeIdToDelete) {
      this.shoeService.deleteShoe(shoeIdToDelete).subscribe({
        next: () => {
      this.popupService.openPopup('Shoe deleted succesfully', '');
        },
        error: (error) => {
          this.popupService.openPopup('An error ocurred trying deleting a shoe.', error);
        }
      });
    }
  }
}
