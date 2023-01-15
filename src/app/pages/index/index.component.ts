import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  products: any[] = [];

  customOptions: OwlOptions = {
    items: 4,
    margin: 30,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        }
    }
  }

  constructor() { }

  ngOnInit(): void {

    this.products = [
      {
        id: 1,
        productName: 'dtopshop',
        productDetails: 'Knot Front Mini Dress.',
        productPrice: '$55.00',
        qtyTotal: 1,
        productImg: 'assets/img/product-img/product-1.jpg',
        thumbImage: 'assets/img/product-img/product-2.jpg',
      },
      {
        id: 2,
        productName: 'ctopshop',
        productDetails: 'Knot Front Mini Dress.',
        productPrice: '$80.00',
        qtyTotal: 1,
        productImg: 'assets/img/product-img/product-2.jpg',
        thumbImage: 'assets/img/product-img/product-3.jpg',
      },
      {
        id: 3,
        productName: 'btopshop',
        productDetails: 'Knot Front Mini Dress.',
        productPrice: '$55.00',
        qtyTotal: 1,
        productImg: 'assets/img/product-img/product-3.jpg',
        thumbImage: 'assets/img/product-img/product-4.jpg',
      },
      {
        id: 4,
        productName: 'jtopshop',
        productDetails: 'Knot Front Mini Dress.',
        productPrice: '$70.00',
        qtyTotal: 1,
        productImg: 'assets/img/product-img/product-4.jpg',
        thumbImage: 'assets/img/product-img/product-5.jpg',
      },
      {
        id: 5,
        productName: 'atopshop',
        productDetails: 'Knot Front Mini Dress.',
        productPrice: '$99.00',
        qtyTotal: 1,
        productImg: 'assets/img/product-img/product-5.jpg',
        thumbImage: 'assets/img/product-img/product-6.jpg',
      },
      {
        id: 6,
        productName: 'ktopshop',
        productDetails: 'Knot Front Mini Dress.',
        productPrice: '$95.00',
        qtyTotal: 1,
        productImg: 'assets/img/product-img/product-6.jpg',
        thumbImage: 'assets/img/product-img/product-7.jpg',
      },
      {
        id: 7,
        productName: 'htopshop',
        productDetails: 'Knot Front Mini Dress.',
        productPrice: '$82.00',
        qtyTotal: 1,
        productImg: 'assets/img/product-img/product-7.jpg',
        thumbImage: 'assets/img/product-img/product-8.jpg',
      },
      {
        id: 8,
        productName: 'vtopshop',
        productDetails: 'Knot Front Mini Dress.',
        productPrice: '$95.00',
        qtyTotal: 1,
        productImg: 'assets/img/product-img/product-8.jpg',
        thumbImage: 'assets/img/product-img/product-9.jpg',
      },
      {
        id: 9,
        productName: 'gtopshop',
        productDetails: 'Knot Front Mini Dress.',
        productPrice: '$100.00',
        qtyTotal: 1,
        productImg: 'assets/img/product-img/product-9.jpg',
        thumbImage: 'assets/img/product-img/product-1.jpg',
      },
    ];
  }


  isAddedToCart:any = localStorage.getItem('single-data') !== null ? JSON.parse(localStorage.getItem('single-data') || '') : [];

  addToCart(products: any, id: any) {
    // debugger
    let isData =  localStorage.getItem('single-data') ? JSON.parse(localStorage.getItem('single-data') || '') : [];
    let total;
    let isListArray = localStorage.getItem('single-data') ? JSON.parse(localStorage.getItem('single-data') || '') : [];
    if(isData.length == 0) {
      console.log('inside else if 226')
      products.isTotal =  Number(products.productPrice.slice(1)) * products.qtyTotal
      isListArray.push(products);
      
      localStorage.setItem('single-data',JSON.stringify(isListArray))
    } else {
      let isFetchedRecord = isData.find((x) => x.id == products.id);
      console.log('inside else if 231')
      if(isFetchedRecord == undefined) {
        products.isTotal =  Number(products.productPrice.slice(1)) * products.qtyTotal
        isListArray.push(products);

        localStorage.setItem('single-data',JSON.stringify(isListArray))
      } else {
        console.log('inside else if 237')
        isData.forEach((element: any) => {
          if(element.id == isFetchedRecord.id) {
            element.qtyTotal++
            total = total + element.qtyTotal;
          }
        });

        console.log(isFetchedRecord, 'isFetchedRecord', isData) 
        localStorage.setItem('single-data',JSON.stringify(isData));
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


}
