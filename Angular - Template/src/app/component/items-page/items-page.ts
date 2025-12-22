import { Component, OnInit } from '@angular/core';
import { clsItemService } from '../../services/item-service';
import { Observable } from 'rxjs';
import { IProduct } from '../../services/general-objects';
import { CommonModule } from '@angular/common';
import { ItemsBoxForItemsPage } from './items-box-for-items-page/items-box-for-items-page';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-items-page',
  imports: [ItemsBoxForItemsPage, CommonModule, Header, Footer],
  templateUrl: './items-page.html',
  styleUrl: './items-page.css',
  standalone: true,
})
export class ItemsPage implements OnInit {
  constructor(private myService: clsItemService) {}
  items!: Observable<IProduct[]>;
  ngOnInit(): void {
    this.items = this.myService.GetAllData();
  }
}
