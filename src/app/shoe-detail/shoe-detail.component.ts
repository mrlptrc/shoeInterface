import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoeDTO } from '../shoe-dto.model';
import { ShoeService } from '../shoe.service'; // Importe o serviço

@Component({
  selector: 'app-shoe-detail',
  templateUrl: './shoe-detail.component.html',
  styleUrls: ['./shoe-detail.component.css']
})
export class ShoeDetailComponent implements OnInit {
  shoe!: ShoeDTO;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shoeService: ShoeService
  ) {}

  ngOnInit() {      
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.shoeService.getShoeById(id).subscribe(shoe => {
        this.shoe = shoe;
        console.log(this.shoe);
      });
    });
  }
}
