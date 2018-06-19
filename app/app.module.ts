import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './wine/header/header.component';
import { NavbarComponent } from './wine/navbar/navbar.component';
import { WineListComponent } from './wine/wine-list/wine-list.component';
import { SearchFormComponent } from './wine/search-form/search-form.component';
import { TableComponent } from './wine/table/table.component';
import { PaginationComponent } from './wine/pagination/pagination.component';
import { EditWineComponent } from './wine/edit-wine/edit-wine.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    WineListComponent,
    SearchFormComponent,
    TableComponent,
    PaginationComponent,
    EditWineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
