import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ItemsBox } from '../items-box/items-box';
import { clsItemService } from '../../services/item-service';
import { IProduct, ISlider } from '../../services/general-objects';
import { map, Observable } from 'rxjs';
import { ItemsProductForHomePage } from './items-product-for-home-page/items-product-for-home-page';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, ItemsBox, ItemsProductForHomePage, Footer, Header],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  standalone: true,
})
export class HomePage implements OnInit {
  constructor(private service: clsItemService) {}
  myItems!: Observable<IProduct[]>;
  sliders!: Observable<ISlider[]>;
  ngOnInit(): void {
    this.myItems = this.service.GetAllData();
    this.sliders = this.service.GetAllSlider();
  }
}
