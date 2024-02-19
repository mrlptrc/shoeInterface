import { Component, OnInit } from '@angular/core';
import { ShoeService } from '../shoe.service';
import { Router } from '@angular/router';
import { ShoeDTO } from '../shoe-dto.model';

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.css'],
})

export class ShoeComponent implements OnInit {
  shoes: ShoeDTO[] = [];
  searchKeyword: string = '';
  exactMatch: boolean = false;

  constructor(
    private shoeService: ShoeService, 
    private router: Router) {}

  ngOnInit(): void {
    console.log("ngOn init") 
  }

  fetchShoes() {
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
}