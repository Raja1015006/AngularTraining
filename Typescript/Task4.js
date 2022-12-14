var Item = /** @class */ (function () {
    function Item(id, name, price, cat) {
        var _this = this;
        this.display = function () {
            return _this.itemId + " " + _this.itemName + " " + _this.itemPrice + " " + _this.category;
        };
        this.itemId = id;
        this.itemName = name;
        this.itemPrice = price;
        this.category = cat;
    }
    return Item;
}());
var obj = new Item(1, "Air Conditioner", 120000, "Gadgets");
console.log(obj.display());
