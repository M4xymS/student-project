import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinaryTreeSearchComponent } from './binary-tree-search/binary-tree-search.component';
import { BoyerSearchComponent } from './boyer-search/boyer-search.component';
import { HashSearchComponent } from './hash-search/hash-search.component';
import { KnuthSearchComponent } from './knuth-search/knuth-search.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RabinSearchComponent } from './rabin-search/rabin-search.component';
import { SequentialSearchComponent } from './sequential-search/sequential-search.component';

const routes: Routes = [{
    path: 'mainPage',
    component: MainPageComponent
  },
  {
    path: 'sequentialSearch',
    component: SequentialSearchComponent
  },
  {
    path: 'hashSearch',
    component: HashSearchComponent
  },
  {
    path: 'binaryTreeSearch',
    component: BinaryTreeSearchComponent
  },
  {
    path: 'knuthSearch',
    component: KnuthSearchComponent
  },
  {
    path: 'boyerSearch',
    component: BoyerSearchComponent
  },
  {
    path: 'rabinSearch',
    component: RabinSearchComponent
  },
  {
    path: '',
    redirectTo: '/mainPage',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/mainPage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
