import { Component, OnInit } from '@angular/core';
import { ShoeDTO } from '../shoe-dto.model';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.css'
})
export class SearchComponentComponent implements OnInit{
  shoes: ShoeDTO[] = [];

  ngOnInit() {
    console.log("chamando search")
  }



}
