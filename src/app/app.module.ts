import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SequentialSearchComponent } from './sequential-search/sequential-search.component';
import { HashSearchComponent } from './hash-search/hash-search.component';
import { BinaryTreeSearchComponent } from './binary-tree-search/binary-tree-search.component';
import { KnuthSearchComponent } from './knuth-search/knuth-search.component';
import { BoyerSearchComponent } from './boyer-search/boyer-search.component';
import { RabinSearchComponent } from './rabin-search/rabin-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SequentialSearchComponent,
    HashSearchComponent,
    BinaryTreeSearchComponent,
    KnuthSearchComponent,
    BoyerSearchComponent,
    RabinSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
