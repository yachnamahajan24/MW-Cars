
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AboutComponent } from './about/about.component';
import { ViewCarComponent } from './view-car/view-car.component';
import { CarListComponent } from './car-list/car-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FrameworkComponent } from './framework/framework.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';

@NgModule({
  declarations: [
    AboutComponent,
    HomepageComponent,
    CarListComponent,
    FrameworkComponent,
    DetailsPageComponent,
    ContactsPageComponent,
    ViewCarComponent
  ],

  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
        {
            path: '',
            component: HomepageComponent

        },

        {
            path: 'about',
            component: AboutComponent

        },

        {
            path: 'cars',
            component: CarListComponent

        },

        {
            path: 'contactus',
            component: ContactsPageComponent

        },

        {
            path: 'cars/:carid',
            component: ViewCarComponent

        }

    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue:'/'}],
  bootstrap: [FrameworkComponent]
})

export class AppModule { }