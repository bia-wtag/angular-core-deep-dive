import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@/app/app-routing.module';
import { AppComponent } from '@/app/app.component';
import { CourseCardComponent } from '@/components/course-card/course-card.component';
import { ButtonComponent } from '@/components/button/button.component';
import { CourseListComponent } from '@/components/course-list/course-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    ButtonComponent,
    CourseListComponent,
    NavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
