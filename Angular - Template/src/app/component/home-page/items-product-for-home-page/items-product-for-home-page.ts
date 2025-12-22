import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IProduct } from '../../../services/general-objects';

@Component({
  selector: 'app-items-product-for-home-page',
  imports: [CurrencyPipe],
  templateUrl: './items-product-for-home-page.html',
  styleUrl: './items-product-for-home-page.css',
})
export class ItemsProductForHomePage {
  @Input() items!: IProduct;
}
