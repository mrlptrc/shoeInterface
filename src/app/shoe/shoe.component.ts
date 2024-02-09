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
    this.shoeService.getAllShoes().subscribe(
      (data) => {
        this.shoes = data;
      },
      (error) => {
        console.error('Error fetching shoes:', error);
      }
    );
  }

  deleteShoe(id: string) {
    this.shoeService.deleteShoe(id).subscribe(
      (response) => {
        console.log('Shoe deleted successfully:', response);
        this.fetchShoes();
      },
      (error) => {
        console.error('Error deleting shoe:', error);
      }
    );
  }
}