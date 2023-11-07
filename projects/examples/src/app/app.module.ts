import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxCanItModule } from 'ngx-can-it';
import { ExactComparator, RelationComparator } from '@can-it/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxCanItModule.forNewScope(
      new RelationComparator(
        ['view', 'click'],
        { click: ['view'] } // if a user allow to perform "click", they will able to perform "view" action
      ),
      new ExactComparator()
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
