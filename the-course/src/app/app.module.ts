import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '@/app/app-routing.module';

import { AppComponent } from '@/app/app.component';
import { CourseCardComponent } from '@/components/course-card/course-card.component';
import { ButtonComponent } from '@/components/button/button.component';
import { CourseListComponent } from '@/components/course-list/course-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SaleBannerComponent } from './components/sale-banner/sale-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    ButtonComponent,
    CourseListComponent,
    NavigationComponent,
    SaleBannerComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
