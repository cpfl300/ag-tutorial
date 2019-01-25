import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { BookSearchMainComponent } from './book-search/bookSearch/book-search-main/book-search-main.component';
import { MovieSearchMainComponent } from './movie-search/movieSearch/movie-search-main/movie-search-main.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book', component: BookSearchMainComponent },
  { path: 'movie', component: MovieSearchMainComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
