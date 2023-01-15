import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DesignUtilitService } from 'src/app/appServices/design-utilit.service';
import Swal from 'sweetalert2';
import { ProductService } from '../../appServices/product.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  public shopForm!: FormGroup;
  products: any[] = [];
  // count: number = Number(localStorage.getItem('data')) ? Number(localStorage.getItem('data')) : 0;
  public count: number = 0;
  public page: any = 1;
  public pageSize: any = 6;
  public cart_count: any;
  productListShow: [];
  id: any;

  value: number = 100;
  highValue: number = 100;
  options: Options = {
    floor: 0,
    ceil: 100,
    showSelectionBar: true,
    translate: (value: number): string => {
      return '$' + value;
    }
  };

  filteredProducts: {
    id: number;
    productImg: string;
    thumbImage: string;
    productName: string;
    productDetails: string;
    productPrice: string;
  }[] = [];

  public colors: any[] = [
    {
      id: 1,
      productColor: "Blue",
      selected: false,
    },
    {
      id: 2,
      productColor: "Tan",
      selected: false,
    }
  ]

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    public router: Router
  ) { }

  isListRecords;


  sortByselect = [
    { id: 1, name: 'Name', value: 'Name' },
    { id: 2, name: 'Newest', value: 'Newest' },
    { id: 3, name: 'Price: $$ - $', value: 'High' },
    { id: 4, name: 'Price: $ - $$', value: 'Low' },
  ];

  productData: any;
  singledata: any;

  ngOnInit(): void {

    this.cart_count = this.productService.getItems();

    // Productdetails
    this.products = [
      {
        id: 1,
        productName: 'dtopshop',
        productDetails: 'Knot Front Mini Dress.',
        productPrice: '$55.00',
        qtyTotal: 1,
        productColor: 'Blue',
        productImg: 'assets/img/product-img/product-1.jpg',
        thumbImage: 'assets/img/product-img/product-2.jpg',
      },
      {
        id: 2,
        productName: 'ctopshop',
        productDetails: 'Knot Front Mini Dress.',
        productPrice: '$80.00',
        qtyTotal: 1,
        productColor: 'Tan',
        productImg: 'assets/img/product-img/product-2.jpg',
        thumbImage: 'assets/img/product-img/product-3.jpg',
      },
      {
        id: 3,
        productName: 'btopshop',
        productDetails: 'Knot Front Mini Dress.',
        productPrice: '$55.00',
        qtyTotal: 1,
        productColor: 'Green',
        productImg: 'assets/img/product-img/product-3.jpg',
        thumbImage: 'assets/img/product-img/product-4.jpg',
      },
      {
        id: 4,
        productName: 'jtopshop',
        productDetails: 'Knot Front Mini Dress.',
        productPrice: '$70.00',
        qtyTotal: 1,
        productColor: 'Black',
        productImg: 'assets/img/product-img/product-4.jpg',
        thumbImage: 'assets/img/product-img/product-5.jpg',
      },
      {
        id: 5,
        productName: 'atopshop',
        productDetails: 'Knot Front Mini Dress.',
        productPrice: '$99.00',
        qtyTotal: 1,
        productColor: 'Orange',
        productImg: 'assets/img/product-img/product-5.jpg',
        thumbImage: 'assets/img/product-img/product-6.jpg',
      },
      {
        id: 6,
        productName: 'ktopshop',
        productDetails: 'Knot Front Mini Dress.',
        productPrice: '$95.00',
        qtyTotal: 1,
        productColor: 'Blue',
        productImg: 'assets/img/product-img/product-6.jpg',
        thumbImage: 'assets/img/product-img/product-7.jpg',
      },
      {
        id: 7,
        productName: 'htopshop',
        productDetails: 'Knot Front Mini Dress.',
        productPrice: '$82.00',
        qtyTotal: 1,
        productColor: 'Gray',
        productImg: 'assets/img/product-img/product-7.jpg',
        thumbImage: 'assets/img/product-img/product-8.jpg',
      },
      {
        id: 8,
        productName: 'vtopshop',
        productDetails: 'Knot Front Mini Dress.',
        productPrice: '$95.00',
        qtyTotal: 1,
        productColor: 'Maroon',
        productImg: 'assets/img/product-img/product-8.jpg',
        thumbImage: 'assets/img/product-img/product-9.jpg',
      },
      {
        id: 9,
        productName: 'gtopshop',
        productDetails: 'Knot Front Mini Dress.',
        productPrice: '$100.00',
        qtyTotal: 1,
        productColor: 'Black',
        productImg: 'assets/img/product-img/product-9.jpg',
        thumbImage: 'assets/img/product-img/product-1.jpg',
      },
    ];
    this.isListRecords = this.products;

    // Default sort order on page load
    this.products = this.products.sort(
      (low, high) => low.productPrice - high.productPrice
    );

    // this.productData = this.productService.products;
    this.shopForm = this.fb.group({
      productSort: [''],
    });
  }

  sort(event: any) {
    console.log(event.target.value);
    switch (event.target.value) {
      case 'Price: $$ - $': {
        this.products = this.products.sort(
          (low, high) =>
            Number(high.productPrice.slice(1)) -
            Number(low.productPrice.slice(1))
        );
        break;
      }

      case 'Price: $ - $$': {
        this.products = this.products.sort(
          (low, high) =>
            Number(low.productPrice.slice(1)) -
            Number(high.productPrice.slice(1))
        );
        break;
      }

      case 'Name': {
        this.products = this.products.sort(function (low, high) {
          if (low.productName < high.productName) {
            return -1;
          } else if (low.productName > high.productName) {
            return 1;
          } else {
            return 0;
          }
        });
        break;
      }
      default: {
        this.products = this.products.sort(
          (high, low) =>
            Number(high.productPrice.slice(1)) -
            Number(low.productPrice.slice(1))
        );
        break;
      }
    }
    return this.products;
  }

  sliderChange() {
    console.log(this.value, 'dsd', this.products)
    let isListedrecords = this.isListRecords.filter(
      (obj) =>
        // isEl = Number(obj.productPrice.slice(1));
        Number(obj.productPrice.slice(1)) <= this.value

    );
    this.products = isListedrecords;

    // console.log(this.products.filter(
    //   (obj) =>
    //     // console.log(obj.productPrice, Number(obj.productPrice.slice(1)));
    //     // isEl = Number(obj.productPrice.slice(1));
    //     Number(obj.productPrice.slice(1)) <= this.value
    // ));
  }
  // onAdd(products: any) {
  //   this.count = this.count + 1;
  //   this._du.cartCount.next(this.count);
  //   console.log(this.count);
  //   localStorage.setItem('data', this.count + '');
  // }

  // onRemove(products: any) {
  //   this.count = this.count - 1;
  //   this._du.cartCount.next(this.count);
  //   console.log(this.count);
  // }

  filterColor() {
    console.log(this.colors, 'data', this.products)
    const filteredProductArray = new Array<any>();
    const activeColors = this.colors.filter(c => c.selected).map(c => c.productColor);
    // this.productListShow.forEach(prod => {
    //   const filteredSubProducts = prod.product.filter(p => activeColors.includes(p.productColor));
    //   if(filteredSubProducts.length > 0) {
    //     const clonedProduct = Object.assign({}, prod);
    //          clonedProduct.products = filteredSubProducts;
    //          filteredProductArray.push(clonedProduct);
    //   }
    // });
    this.products = filteredProductArray;
    console.log(this.productListShow);
  }

  onAddHeart() {
    let isElement = document.getElementsByClassName('favme fa fa-heart') as any;
    isElement[0].classList.add('active');
    isElement[0].classList.remove('active');
  }

  // onRemoveHeart() {
  //   let isElement = document.getElementsByClassName('favme fa fa-heart') as any;
  //   isElement[0].classList.remove('active');
  // }

  isAddedToCart: any =
    localStorage.getItem('single-data') !== null
      ? JSON.parse(localStorage.getItem('single-data') || '')
      : [];

  addToCart(products: any, id: any) {
    // debugger
    let isData = localStorage.getItem('single-data')
      ? JSON.parse(localStorage.getItem('single-data') || '')
      : [];
    let total;
    let isListArray = localStorage.getItem('single-data')
      ? JSON.parse(localStorage.getItem('single-data') || '')
      : [];
    if (isData.length == 0) {
      console.log('inside else if 226');
      products.isTotal =
        Number(products.productPrice.slice(1)) * products.qtyTotal;
      isListArray.push(products);

      localStorage.setItem('single-data', JSON.stringify(isListArray));
    } else {
      let isFetchedRecord = isData.find((x) => x.id == products.id);
      console.log('inside else if 231');
      if (isFetchedRecord == undefined) {
        products.isTotal =
          Number(products.productPrice.slice(1)) * products.qtyTotal;
        isListArray.push(products);

        localStorage.setItem('single-data', JSON.stringify(isListArray));
      } else {
        console.log('inside else if 237');
        isData.forEach((element: any) => {
          if (element.id == isFetchedRecord.id) {
            element.qtyTotal++;
            total = total + element.qtyTotal;
          }
        });

        console.log(isFetchedRecord, 'isFetchedRecord', isData);
        localStorage.setItem('single-data', JSON.stringify(isData));
      }
    }
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Added to Cart',
    });
    return this.isAddedToCart;
  }

  addTowishlist(products: any, id: any) {
    // debugger
    let isData = localStorage.getItem('products_wishlist')
      ? JSON.parse(localStorage.getItem('products_wishlist') || '')
      : [];
    let total;
    let isListArray = localStorage.getItem('products_wishlist')
      ? JSON.parse(localStorage.getItem('products_wishlist') || '')
      : [];
    if (isData.length == 0) {
      console.log('inside else if 226');
      products.isTotal =
        Number(products.productPrice.slice(1)) * products.qtyTotal;
      isListArray.push(products);

      localStorage.setItem('products_wishlist', JSON.stringify(isListArray));
    } else {
      let isFetchedRecord = isData.find((x) => x.id == products.id);
      console.log('inside else if 231');
      if (isFetchedRecord == undefined) {
        products.isTotal =
          Number(products.productPrice.slice(1)) * products.qtyTotal;
        isListArray.push(products);

        localStorage.setItem('products_wishlist', JSON.stringify(isListArray));
        this.router.navigate(['wishlist']);
      } else {
        console.log('inside else if 237');
        isData.forEach((element: any) => {
          if (element.id == isFetchedRecord.id) {
            element.qtyTotal++;
            total = total + element.qtyTotal;
          }
        });

        console.log(isFetchedRecord, 'isFetchedRecord', isData);
        localStorage.setItem('products_wishlist', JSON.stringify(isData));
      }
    }
    return this.isAddedToCart;
  }
}
