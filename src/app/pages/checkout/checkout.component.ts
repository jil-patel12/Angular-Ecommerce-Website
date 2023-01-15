import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;
  submitted = false;
  getProductId: any;
  productData: any;
  public product_detail: any;
  cartdata: any;
  data: any;
  public product_data: any;

  constructor(
    private formBuilder: FormBuilder,
    private param: ActivatedRoute
  ) {}

  listofCountry = [
    { id: 1, name: 'India' },
    { id: 2, name: 'United Kingdom' },
    { id: 3, name: 'Germany' },
    { id: 4, name: 'United States' },
    { id: 5, name: 'Australia' },
    { id: 6, name: 'Canada' },
    { id: 7, name: 'France' },
    { id: 8, name: 'Brazil' },
  ];

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: ['', Validators.required],
      country: ['', Validators.required],
      address: ['', Validators.required],
      postCode: ['', Validators.required, Validators.minLength(6)],
      city: ['', Validators.required],
      province: ['', Validators.required],
      phoneNo: ['', Validators.required],
      email: [
        '',
        Validators.required,
        Validators.pattern(
          /^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/
        ),
      ],
      acceptTerms: [false, Validators.requiredTrue],
    });

    this.product_data = localStorage.getItem('data');
    console.log(this.product_data);

    this.product_detail =
      localStorage.getItem('single-data') !== null
        ? JSON.parse(localStorage.getItem('single-data') || '')
        : [];
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.checkoutForm.controls;
  }

  get product_Total() {
    return JSON.parse(localStorage.getItem('product_total') + '');
  }

  // getDataFormLocal() {
  //   return JSON.parse(localStorage.getItem("data") || '')
  // }

  onSubmit() {
    this.submitted = true;
  }
}
