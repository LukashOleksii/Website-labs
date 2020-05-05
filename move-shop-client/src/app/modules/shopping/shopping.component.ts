import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './services/shopping.service';
import { Shoe } from '../../models/shoe';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  shoes: Shoe[] = [];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }
}
