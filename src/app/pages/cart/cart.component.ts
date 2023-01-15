// import { CurrencyPipe, JsonPipe } from '@angular/common';
import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';
import { ProductService } from '../../appServices/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  // @ViewChildren("subTotalWrap") subTotalItems: QueryList<ElementRef>;
  // @ViewChildren("subTotalWrap_existing") subTotalItems_existing: QueryList<
  //   ElementRef
  // >;
  products: any[] = [];
  cartItemList: any = [];
  items = [];
  public total: any = 0;
  public productList: any;
  public cartvalue: any;
  public count = 0;
  countvalue: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.cartvalue =
      localStorage.getItem('single-data') !== null
        ? JSON.parse(localStorage.getItem('single-data') || '')
        : [];

    let istotal = 0;
    this.cartvalue.map((v: any) => {
      istotal = istotal + Number(v.productPrice.slice(1)) * v.qtyTotal;
    });

    this.total = istotal;
    localStorage.setItem('product_total', JSON.stringify(this.total));
  }

  get item() {
    return localStorage.getItem('single-data') !== null
      ? JSON.parse(localStorage.getItem('single-data') || '')
      : [];
  }

  get total1() {
    return this.items.reduce(
      (sum, x) => ({
        qtyTotal: 1,
        productPrice: sum.productPrice + x.qtyTotal * x.productPrice,
      }),
      { qtyTotal: 1, productPrice: 0 }
    ).productPrice;
  }

  minusQty(event: any) {
    this.countvalue = this.count++;
    this.total = 0;
    if (event.qtyTotal > 1) event.qtyTotal--;
    this.cartvalue.map((v: any) => {
      Object.assign(v, {
        isTotal: Number(v.productPrice.slice(1)) * v.qtyTotal,
      });
      this.total = Number(this.total) + Number(v.isTotal);
    });
    localStorage.setItem('single-data', JSON.stringify(this.cartvalue));
  }

  addQty(event: any) {
    this.countvalue = this.count++;

    this.total = 0;
    event.qtyTotal++;

    this.cartvalue.map((v: any) => {
      // console.log(v.productPrice, v.qtyTotal)
      Object.assign(v, {
        isTotal: Number(v.productPrice.slice(1)) * v.qtyTotal,
      });
      this.total = Number(this.total) + Number(v.isTotal);
    });
    localStorage.setItem('single-data', JSON.stringify(this.cartvalue));
  }

  removeItem(products: any) {
    let index = this.cartvalue.findIndex((o) => o.id === products.id);

    // delete index;
    if (index > -1) {
      this.cartvalue.splice(index, 1);
    }
    localStorage.setItem('single-data', JSON.stringify(this.cartvalue));
  }

  // removeAllCart(){
  //   this.cartvalue = []
  //   this.cartvalue.next(this.cartvalue);
  //   localStorage.setItem('single-data', JSON.stringify(this.cartvalue));
  // }

  clearCart(products) {
    this.products = [];
    localStorage.removeItem('single-data');
  }
}
