import { Component, OnInit } from '@angular/core';
import { ShoeService } from '../shoe.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shoe-delete',
  templateUrl: './shoe-delete.component.html',
  styleUrls: ['./shoe-delete.component.css']
})

export class ShoeDeleteComponent implements OnInit {
  deleteShoeForm: FormGroup;

  constructor(private fb: FormBuilder, private shoeService: ShoeService) {
    this.deleteShoeForm = this.fb.group({
      shoeIdToDelete: ['']
    });  
  }

  ngOnInit() { }

  onDeleteShoeSubmit() {
    const shoeIdToDelete = this.deleteShoeForm.get('shoeIdToDelete')?.value;
    if (shoeIdToDelete) {
      this.shoeService.deleteShoe(shoeIdToDelete).subscribe(
        () => {
          console.log('Shoe deleted successfully');
        },
        (error) => {
          console.error('Error deleting shoe:', error);
        }
      );
    }
  }
}
