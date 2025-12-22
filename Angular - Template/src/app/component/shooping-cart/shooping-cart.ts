import { Component, OnInit } from '@angular/core';
import { ItemCartService } from '../../services/itemcart-service';
import { ICart } from '../../services/general-objects';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-shooping-cart',
  imports: [CommonModule, CurrencyPipe, RouterLink, Header, Footer],
  templateUrl: './shooping-cart.html',
  styleUrl: './shooping-cart.css',
  standalone: true,
})
export class ShoopingCart implements OnInit {
  items: Array<ICart> = [];
  constructor(private shoopingcart: ItemCartService) {}
  ngOnInit(): void {
    this.items = this.shoopingcart.items;
    console.log(this.items.length);
  }
  RemoveItem(ItemID: number): boolean {
    if (this.shoopingcart.RemoveItem(ItemID)) {
      this.items = this.shoopingcart.items;
    }
    return false;
  }
  GetTotalPrice(): number {
    let sum = 0;
    for (let i of this.items) {
      if (i.total > 0) sum += i.total;
    }
    return sum > 0 ? sum : 0;
  }
}
