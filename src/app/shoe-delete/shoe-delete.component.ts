import { Component, OnInit } from '@angular/core';
import { ShoeService } from '../shoe.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shoe-delete',
  templateUrl: './shoe-delete.component.html',
  styleUrls: ['./shoe-delete.component.css']
})

//added the missing ngOnInit method to the ShoeDeleteComponent class.
export class ShoeDeleteComponent implements OnInit {
  deleteShoeForm: FormGroup;

  constructor(private fb: FormBuilder, private shoeService: ShoeService) {
    this.deleteShoeForm = this.fb.group({
      shoeIdToDelete: ['']
    });  
  }

  ngOnInit() {
    // Add your initialization logic here
  }

  onDeleteShoeSubmit() {
    const shoeIdToDelete = this.deleteShoeForm.get('shoeIdToDelete')?.value;
    if (shoeIdToDelete) {
      //updated the code to use the new recommended syntax for subscribing to observables in RxJS.
      this.shoeService.deleteShoe(shoeIdToDelete).subscribe({
        next: () => {
          console.log('Shoe deleted successfully');
        },
        error: (error) => {
          console.error('Error deleting shoe:', error);
        }
      });
    }
  }
}
