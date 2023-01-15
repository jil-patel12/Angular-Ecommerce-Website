import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Component */
import { BlogComponent } from './blog/blog.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { IndexComponent } from './index/index.component';
import { ShopComponent } from './shop/shop.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { SingleProductDetailsComponent } from './single-product-details/single-product-details.component';
import { RegularPageComponent } from './regular-page/regular-page.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';



const routes: Routes = [
  {
    path: '', component: IndexComponent 
  },
  // {
  //   path: 'home', component: IndexComponent
  // },    
  {
    path: 'shop', component: ShopComponent
  },
  {
    path: 'productDetails/:id', component: SingleProductDetailsComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'chechout', component: CheckoutComponent
  },
  {
    path: 'blog', component: BlogComponent
  },
  {
    path: 'singleBlog', component: SingleBlogComponent
  },
  {
    path: 'regularPage', component: RegularPageComponent
  },
  {
    path: 'contact', component: ContactComponent
  }, 
  {
    path: 'wishlist', component: WishlistComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
