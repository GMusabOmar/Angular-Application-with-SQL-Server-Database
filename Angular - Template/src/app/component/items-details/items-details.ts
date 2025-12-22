import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../services/general-objects';
import { clsItemService } from '../../services/item-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { ItemCartService } from '../../services/itemcart-service';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-items-details',
  imports: [CommonModule, CurrencyPipe, RouterLink, Header, Footer],
  templateUrl: './items-details.html',
  styleUrl: './items-details.css',
  standalone: true,
})
export class ItemsDetails implements OnInit {
  constructor(
    private service: clsItemService,
    private route: ActivatedRoute,
    private cartservice: ItemCartService
  ) {}
  id!: number;
  item?: IProduct;
  otheritems?: Observable<IProduct[]>;
  ngOnInit(): void {
    this.route.paramMap.subscribe((parameterFromUrl) => {
      this.id = +parameterFromUrl.get('Id_Item')!;
      this.service.GetDataByID(this.id).subscribe((data) => (this.item = data));
    });
    this.otheritems = this.service
      .GetAllData()
      .pipe(map((items) => items.filter((i) => i.id !== this.item?.id)));
  }
  Additem_tocart(): void {
    this.cartservice.AddToCart(this.item!, 1);
  }
}
