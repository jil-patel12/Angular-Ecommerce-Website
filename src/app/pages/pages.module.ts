import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Component */
import { IndexComponent } from './index/index.component';
import { ShopComponent } from './shop/shop.component';
import { SingleProductDetailsComponent } from './single-product-details/single-product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { BlogComponent } from './blog/blog.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { RegularPageComponent } from './regular-page/regular-page.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishlistComponent } from './wishlist/wishlist.component';
/* Module */
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgSelectModule } from '@ng-select/ng-select';
import { NiceSelectModule } from 'ng-nice-select';
import {MatDialogModule} from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CartComponent } from './cart/cart.component';
import { SwiperModule } from "swiper/angular";
import { ProdCarouselComponent } from './prod-carousel/prod-carousel.component';


@NgModule({
  declarations: [
    IndexComponent,
    ShopComponent,
    SingleProductDetailsComponent,
    CheckoutComponent,
    BlogComponent,
    SingleBlogComponent,
    RegularPageComponent,
    ContactComponent,
    CartComponent,
    WishlistComponent,
    ProdCarouselComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    RouterModule,
    FormsModule,
    SwiperModule,
    CarouselModule,
    SlickCarouselModule,
    NgSelectModule,
    NiceSelectModule,
    MatDialogModule,
    NgbModule,
    NgxSliderModule
    
  ]
})
export class PagesModule { }
