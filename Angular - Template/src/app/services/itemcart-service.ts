import { Injectable } from '@angular/core';
import { ICart, IProduct } from './general-objects';

@Injectable({
  providedIn: 'root',
})
export class ItemCartService {
  items: Array<ICart> = [];
  private isItemExist(item: IProduct): boolean {
    for (let i of this.items) {
      if (i.id === item.id) {
        i.quantity++;
        i.total = i.price * i.quantity;
        return true;
      }
    }
    return false;
  }
  AddToCart(item: IProduct, qty: number): void {
    if (this.isItemExist(item)) return;
    let newItemToCart: ICart = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: qty,
      total: item.price * qty,
    };
    this.items.push(newItemToCart);
    localStorage.setItem('Cart', JSON.stringify(this.items));
  }
  RemoveItem(ItemID: number): boolean {
    let getIndex: number = this.items.findIndex((i) => i.id === ItemID);
    if (getIndex >= 0) {
      this.items.splice(getIndex, 1);
      localStorage.setItem('Cart', JSON.stringify(this.items));
      return true;
    }
    return false;
  }
}
