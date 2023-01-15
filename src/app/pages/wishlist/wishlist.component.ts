import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  products: any[] = [];
  public wishlistvalue: any;
  constructor() {}

  ngOnInit(): void {
    this.wishlistvalue =
      localStorage.getItem('products_wishlist') !== null
        ? JSON.parse(localStorage.getItem('products_wishlist') || '')
        : [];
  }

  get wishlist() {
    return localStorage.getItem('products_wishlist') !== null
      ? JSON.parse(localStorage.getItem('products_wishlist') || '')
      : [];
  }

  dislikeItem(products: any) {
    let index = this.wishlistvalue.findIndex((o) => o.id === products.id);
    if (index > -1) {
      this.wishlistvalue.splice(index, 1);
    }

    localStorage.setItem(
      'products_wishlist',
      JSON.stringify(this.wishlistvalue)
    );
  }
}
