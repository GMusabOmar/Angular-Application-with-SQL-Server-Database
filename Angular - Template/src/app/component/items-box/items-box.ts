import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../services/general-objects';
import { LowerCasePipe, UpperCasePipe, CurrencyPipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-items-box',
  imports: [RouterLink, CurrencyPipe, TitleCasePipe],
  templateUrl: './items-box.html',
  styleUrl: './items-box.css',
  standalone: true,
})
export class ItemsBox {
  @Input() items!: IProduct;
}
