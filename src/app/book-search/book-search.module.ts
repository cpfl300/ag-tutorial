import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookSearchMainComponent } from './bookSearch/book-search-main/book-search-main.component';
import { SearchBoxComponent } from './bookSearch/search-box/search-box.component';
import { DetailBoxComponent } from './bookSearch/detail-box/detail-box.component';
import { ListBoxComponent } from './bookSearch/list-box/list-box.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatCardModule } from '@angular/material/card';

// 양방향 바인딩을위한 FormsModule import
import { FormsModule } from '@angular/forms';

// COMPOSITION_BUFFER_MODE import - 한글처리
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';

import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [BookSearchMainComponent, SearchBoxComponent, DetailBoxComponent, ListBoxComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    {
      provide: COMPOSITION_BUFFER_MODE,
      useValue: false
    }
  ]
})
export class BookSearchModule { }
