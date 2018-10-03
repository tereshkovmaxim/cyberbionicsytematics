interface IOrderItem {
  name: string;
  price: number;
}

enum Prices {kolbasa=20, grib=10, becon=25, olivki=5, spise=5, chees= 30, small=100, medium=130, large=160};

class Cart {
  private _size: IOrderItem;
  private _filling: IOrderItem[];

  constructor(){
    this._filling = [];
    this._size = {name: 'medium', price: Prices.medium};
  }

  set size(name: string){
    this._size = {name: name, price: Prices[name]};
    console.dir(this._size);
  }

  set filling(name: string){
    if (this._filling.some( item => item.name == name ) ){
      this._filling = this._filling.filter( item => item.name != name );
    }
    else {
      this._filling.push({name: name, price: Prices[name]});
    }
    console.dir(this._filling);
  }

  get total(): number{
    let total = 0;
    total += this._size.price;
    total += this._filling.reduce( (sum, item) => sum + item.price, 0 );
    return total;
  }

  listOrders(): IOrderItem[]{
    let result: IOrderItem[] = [];
    result.push(this._size);

    this._filling.forEach(item => result.push(item));

    return result;
  }
}