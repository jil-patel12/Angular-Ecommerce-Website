import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DesignUtilitService } from './design-utilit.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  items: any = [];
  data: any;
  cartItemList: any;
  public productList = new BehaviorSubject<any>([]);
  products: any = [];
  constructor(private designUtilitService: DesignUtilitService) {}

  // Productdetails

  getDatafromlocal() {
    return JSON.parse(localStorage.getItem('single-data') || '');
  }

  addToCart(data: any) {
    this.products.push(data);
    let existingItems = [];
    if (localStorage.getItem('single-data')) {
      existingItems = [data, ...existingItems];
      console.log('Items exists');
    } else {
      console.log('NO items exists');
      existingItems = [data];
    }
    this.saveCart('single-data', this.products);
  }

  addtowish(data: any){
    this.products.push(data);
    let existingItems = [];
    if(localStorage.getItem('products_wishlist')) {
      existingItems = [data, ...existingItems ];
      console.log('Items exists');
    } else {
      console.log('No item exists');
      existingItems = [data];
    }
    localStorage.setItem('products_wishlist', JSON.stringify(this.products))
  }

  getItems() {
    // return JSON.parse(localStorage.getItem("single-data") || '')
    return this.products;
  }

  loadCart() {
    this.products = this.getCartDetails;
  }

  saveCart(key: any, products: any) {
    var str = this.designUtilitService.encrypt(JSON.stringify(products));
    localStorage.setItem(key, str);
    return str;
  }

  //adf to cart single data
  itemInCart(products: any): boolean {
    return this.products.findIndex((o: any) => o.id === products.id) > -1;
  }

  clearCart(products) {
    this.products = [];
    localStorage.removeItem('single-data');
  }

  get getCartDetails() {
    return this.getData('single-data') != null && this.getData('single-data') != '' ? JSON.parse(this.getData('single-data')) : []
  }

  public getData(key: string) {
    let data = localStorage.getItem(key) || "";
    return this.designUtilitService.decrypt(data);
  }

}
