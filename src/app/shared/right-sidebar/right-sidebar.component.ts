import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesignUtilitService } from 'src/app/appServices/design-utilit.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css'],
})
export class RightSidebarComponent implements OnInit {
  getProductId: any;
  cartData: any;
  productData: any;
  data: any;
  public product_detail: any;
  public cartvalue: any;
  public cartCount: number = 0;

  constructor(
    private param: ActivatedRoute,
    private _du: DesignUtilitService
  ) {}

  get totalCartItem() {
    return JSON.parse(localStorage.getItem('single-data'));
  }

  ngOnInit(): void {
    this.getProductId = this.param.snapshot.paramMap.get('id');
    // this.cartData =  localStorage.getItem('single-data') !== null ? JSON.parse(localStorage.getItem('single-data') || '') : [];
    if (this.getProductId) {
      this.productData = this.cartData.filter((value: any) => {
        return value.id == this.getProductId;
      });
    }

    this.product_detail =
      localStorage.getItem('single-data') !== null
        ? JSON.parse(localStorage.getItem('single-data') || '')
        : [];
    // this.product_detail=localStorage.getItem("data")
    // console.log(this.product_detail);
  }

  get product_Total() {
    return JSON.parse(localStorage.getItem('product_total') + '');
  }

  get cartValue() {
    return localStorage.getItem('cartvalue');
  }

  // getDatafromlocal() {
  //   this.listRecord = localStorage.getItem("data");
  //   // console.log(this.listRecord)
  // }

  // getDatafromlocal() {
  //   if(localStorage.getItem("single-data")){
  //     return JSON.parse(localStorage.getItem("single-data") || '')
  //   }
  // }

  onRemove(products: any) {
    this.cartCount = this.cartCount - 1;
    this._du.cartCount.next(this.cartCount);
    console.log(this.cartCount);
  }

  hideCartBar() {
    let isElement = document.getElementsByClassName('cart-bg-overlay') as any;
    isElement[0].classList.remove('cart-bg-overlay-on');
    let isElement2 = document.getElementsByClassName(
      'right-side-cart-area'
    ) as any;
    isElement2[0].classList.remove('cart-on');
  }
}
