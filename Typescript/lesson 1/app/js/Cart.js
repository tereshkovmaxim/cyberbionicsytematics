var Prices;
(function (Prices) {
    Prices[Prices["kolbasa"] = 20] = "kolbasa";
    Prices[Prices["grib"] = 10] = "grib";
    Prices[Prices["becon"] = 25] = "becon";
    Prices[Prices["olivki"] = 5] = "olivki";
    Prices[Prices["spise"] = 5] = "spise";
    Prices[Prices["chees"] = 30] = "chees";
    Prices[Prices["small"] = 100] = "small";
    Prices[Prices["medium"] = 130] = "medium";
    Prices[Prices["large"] = 160] = "large";
})(Prices || (Prices = {}));
;
class Cart {
    constructor() {
        this._filling = [];
        this._size = { name: 'medium', price: Prices.medium };
    }
    set size(name) {
        this._size = { name: name, price: Prices[name] };
        console.dir(this._size);
    }
    set filling(name) {
        if (this._filling.some(item => item.name == name)) {
            this._filling = this._filling.filter(item => item.name != name);
        }
        else {
            this._filling.push({ name: name, price: Prices[name] });
        }
        console.dir(this._filling);
    }
    get total() {
        let total = 0;
        total += this._size.price;
        total += this._filling.reduce((sum, item) => sum + item.price, 0);
        return total;
    }
    listOrders() {
        let result = [];
        result.push(this._size);
        this._filling.forEach(item => result.push(item));
        return result;
    }
}
//# sourceMappingURL=Cart.js.map