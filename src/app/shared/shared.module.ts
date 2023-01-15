import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Module
import { PagesModule } from '../pages/pages.module';
import { SharedRoutingModule } from './shared-routing.module';
// Component
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
// AngularMaterial
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RightSidebarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    PagesModule,
    MatBadgeModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    RightSidebarComponent
  ]
})
export class SharedModule { }
