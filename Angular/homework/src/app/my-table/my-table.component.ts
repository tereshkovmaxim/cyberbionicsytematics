import { Input, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';
import { IProduct } from '../products.interface';
import { DataService } from '../data.service';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {

  products: MatTableDataSource<IProduct>;
  columnsToDisplay = ['id', 'name', 'price', 'delete'];

  @Input() rows;
  myForm = new FormControl('');
  @Output() changeTable = new EventEmitter<number>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.products = new MatTableDataSource<IProduct>(this.dataService.getData());
    this.products.sort = this.sort;
    this.products.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.products.filter = filterValue.trim().toLowerCase();
  }

  getUniqueCategory() {
    return [...Array.from(new Set(this.products.data.map( item => item.category )))];
  }

  newItem(data) {
    this.dataService.addData({id: data.id, name: data.name, price: data.price, category: data.category});
    this.products.data = this.dataService.getData();
    this.products.sort.sort({disableClear: false, id: 'id', start: 'asc'});
  }

  deleteItem(item) {
    this.products.data = this.products.data.filter( el => el.id !== item.id  );
    this.changeTable.emit(item.id);
  }
}
