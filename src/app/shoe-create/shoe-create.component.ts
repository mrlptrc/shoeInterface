import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShoeService } from '../shoe.service';

@Component({
  selector: 'app-shoe-create',
  templateUrl: './shoe-create.component.html',
  styleUrl: './shoe-create.component.css',
})

export class ShoeCreateComponent {
  shoeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private shoeService: ShoeService) {
    this.shoeForm = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      price: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.shoeForm.valid) {
      const shoeData = this.shoeForm.value;
      //updated the code to use the new recommended syntax for subscribing to observables in RxJS.
      this.shoeService.createShoe(shoeData).subscribe({
        next: (response) => {
          console.log('Shoe created successfully:', response);
        },
        error: (error) => {
          console.error('Error creating shoe:', error);
        }
      });
    }
  }
}
