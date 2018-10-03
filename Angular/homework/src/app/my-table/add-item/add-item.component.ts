import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from 'src/app/products.interface';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {

  id: number;
  name: string;
  price: number;
  category: string;

  @Output() newItem = new EventEmitter<IProduct>();

  saveData() {
    this.newItem.emit({
      id: this.id,
      name : this.name,
      price : this.price,
      category: this.category
    });
  }
}
