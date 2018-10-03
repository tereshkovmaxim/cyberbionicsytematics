import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTableModule, MatGridListModule, MatToolbarModule, MatSortModule, MatPaginatorModule, MatButtonModule} from '@angular/material';
import { MatInputModule, MatAutocompleteModule } from '@angular/material';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { DataService } from './data.service';
import { LogService } from './log.service';

import { AppComponent } from './app.component';
import { MyTableComponent } from './my-table/my-table.component';
import { AddItemComponent } from './my-table/add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatGridListModule,
    MatToolbarModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatExpansionModule,
    FormsModule
  ],
  providers: [DataService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
