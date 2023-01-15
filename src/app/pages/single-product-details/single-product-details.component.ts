import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DesignUtilitService } from 'src/app/appServices/design-utilit.service';
import { ProductService } from 'src/app/appServices/product.service';

@Component({
  selector: 'app-single-product-details',
  templateUrl: './single-product-details.component.html',
  styleUrls: ['./single-product-details.component.css']
})
export class SingleProductDetailsComponent implements OnInit {

  public productForm!: FormGroup; 
  products: any[] = [];
  getProductId: any;
  productData: any;
  cartdata :any;
  data: any;
  singleproductdetail:any
  detail: any;
  submitted = false;
  items:any =[];
  
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;
  
  customOptions: OwlOptions = {
    items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ["<img src='assets/img/core-img/long-arrow-alt-left-solid.svg' alt=''>", "<img src='assets/img/core-img/long-arrow-alt-right-solid.svg' alt=''>"],
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000
  }
  

  constructor(private route: ActivatedRoute, private _du: DesignUtilitService, 
    public router: Router,
    private formBuilder: FormBuilder, private productService: ProductService) { }

  productSize = [
    {id: 1, name: 'Size: XL'},
    {id: 2, name: 'Size: X'},
    {id: 3, name: 'Size: M'},
    {id: 4, name: 'Size: S'}
  ]

  productColor = [
    {id: 1, colorName: 'Color: Black'},
    {id: 2, colorName: 'Color: White'},
    {id: 3, colorName: 'Color: Red'},
    {id: 4, colorName: 'Color: Purple'},

  ]
  isID: any;

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

    this.isID = this.route.snapshot.paramMap.get('id')

     this.singleproductdetail =  this.products.find((x) => x.id == this.isID);


    this.productForm = this.formBuilder.group({
      productSize: [''],
      productColor: ['']
    });
    
    
    // this.detail=  localStorage.getItem("single-data") ? JSON.parse(localStorage.getItem("single-data") || '') : []
    // console.log(this.detail);
    
  }

  onClick(){
    console.log(this.isActive + ' ' + this.likesCount);

    if(this.isActive){
      this.likesCount--;
      this.isActive = false;
    }
    else{
      this.likesCount++;
      this.isActive = true;
    }
  }

  get f() {
    return this.productForm.controls;
  }
  getDatafromlocal() {
    return JSON.parse(localStorage.getItem("data") || '')
  }

  onSubmit() {
    this.submitted = true;
    if (this.productForm.invalid)
    return;
  }

  
  addTowishlist(products: any){
    console.log('data',products)
    debugger
    this.items.push(products);
    let existingItems = [];
    if(localStorage.getItem('products_wishlist')) {
      existingItems = [products, ...existingItems ];
      console.log('Items exists');
    } else {
      console.log('No item exists');
      existingItems = [products];
    }
    localStorage.setItem('products_wishlist', JSON.stringify(this.items))
    this.router.navigate(['wishlist']);
  }
  
}
