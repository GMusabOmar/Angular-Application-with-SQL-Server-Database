import { Component, Input } from '@angular/core';
import { IProduct } from '../../../services/general-objects';
import { CurrencyPipe, LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-items-box-for-items-page',
  imports: [CurrencyPipe, LowerCasePipe],
  templateUrl: './items-box-for-items-page.html',
  styleUrl: './items-box-for-items-page.css',
  standalone: true,
})
export class ItemsBoxForItemsPage {
  @Input() items!: IProduct;
}
