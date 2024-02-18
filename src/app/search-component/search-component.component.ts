import { Component } from '@angular/core';
import { ShoeDTO } from '../shoe-dto.model';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.css'
})
export class SearchComponentComponent{
  shoes: ShoeDTO[] = [];


}
