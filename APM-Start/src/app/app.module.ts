import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StartComponent } from './shared/star.component';

import { ConvertToSpacesPipe } from "./shared/convert-to-spaces.pipe";

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ProductListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
