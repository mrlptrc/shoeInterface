import { Component, OnInit } from '@angular/core';
import { ShoeService } from '../shoe.service';
import { Shoe } from '../shoe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.css'],
})

export class ShoeComponent implements OnInit {
  shoes: Shoe[] = [];

  constructor(private shoeService: ShoeService, private router: Router) {}

  ngOnInit(): void {
    this.fetchShoes();  
  }

  fetchShoes() {
    //updated the code to use the new recommended syntax for subscribing to observables in RxJS.
    this.shoeService.getAllShoes().subscribe({
      next: (data) => {
        this.shoes = data;
      },
      error: (error) => {
        console.error('Error fetching shoes:', error);
      }
    });
  }

  deleteShoe(id: string) {
    //updated the code to use the new recommended syntax for subscribing to observables in RxJS.
    this.shoeService.deleteShoe(id).subscribe({
      next: (response) => {
        console.log('Shoe deleted successfully:', response);
        this.fetchShoes();
      },
      error: (error) => {
        console.error('Error deleting shoe:', error);
      }
    });
  }
}