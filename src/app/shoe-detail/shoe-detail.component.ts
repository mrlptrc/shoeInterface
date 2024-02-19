import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoeDTO } from '../shoe-dto.model';


@Component({
  selector: 'app-shoe-detail',
  templateUrl: './shoe-detail.component.html',
  styleUrls: ['./shoe-detail.component.css']
})
export class ShoeDetailComponent implements OnInit {
  shoe!: ShoeDTO;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {      
    this.route.params.subscribe(params => {
      this.shoe = params['id'];
    });
  }
}
