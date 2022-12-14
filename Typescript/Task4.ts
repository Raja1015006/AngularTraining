
class Item
{
    itemId:number;
    itemName:string;
    itemPrice:number;
    category:string;

    constructor(id:number,name:string,price:number,cat:string)
    {
        this.itemId=id;
        this.itemName=name;
        this.itemPrice=price;
        this.category=cat;
    }

    display=()=>{
        return this.itemId+" "+this.itemName+" "+this.itemPrice+" "+this.category;
    }
   
}
 let obj=new Item(1,"Air Conditioner",120000,"Gadgets");
 console.log(obj.display());

