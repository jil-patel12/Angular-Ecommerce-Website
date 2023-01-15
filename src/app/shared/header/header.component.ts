import { Component, OnInit } from '@angular/core';
import { DesignUtilitService } from 'src/app/appServices/design-utilit.service';
import { ProductService } from '../../appServices/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public cartvalue: any;
  public cartCount: number = 0;
  single_data: any;
  total: any;
  constructor(
    private _du: DesignUtilitService,
    private productService: ProductService
  ) {
    // this._du.cartCount.subscribe(res =>{
    //   this.cartCount = res;
    // })
  }

  get totalCartItem() {
    return JSON.parse(localStorage.getItem('single-data'))
  }

  ngOnInit(): void {
    let total = 0;
    let isData = JSON.parse(localStorage.getItem('single-data'));
    // isData.forEach((element: any) => {
    //   total = total + element.qtyTotal;
    // });

  this.total = total

    let isElement = document.getElementsByClassName('cart-bg-overlay') as any;
    isElement[0].addEventListener('click', () => {
      let isElement = document.getElementsByClassName('cart-bg-overlay') as any;
      isElement[0].classList.remove('cart-bg-overlay-on');
      let isElement2 = document.getElementsByClassName(
        'right-side-cart-area'
      ) as any;
      isElement2[0].classList.remove('cart-on');
    });

    this._du.cartCount.subscribe((res) => {
      this.cartCount = res;
    });

    // this.single_data = this.productService.getCartDetails
    // this.total = this.single_data.lenght
  }

  get cartValue() {
    return JSON.parse(localStorage.getItem('product_total') + '');
  }

  toggleCartbar() {
    let isElement = document.getElementsByClassName('cart-bg-overlay') as any;
    isElement[0].classList.add('cart-bg-overlay-on');
    let isElement2 = document.getElementsByClassName(
      'right-side-cart-area'
    ) as any;
    isElement2[0].classList.add('cart-on');
  }

  togglenavbar() {
    let isElement = document.getElementsByClassName('navbarToggler') as any;
    isElement[0].classList.add('active');
    let isElement2 = document.getElementsByClassName('classy-menu') as any;
    isElement2[0].classList.add('menu-on');
  }

  hidemenu() {
    let isElement = document.getElementsByClassName('navbarToggler') as any;
    isElement[0].classList.remove('active');
    let isElement2 = document.getElementsByClassName('classy-menu') as any;
    isElement2[0].classList.remove('menu-on');
  }
}
