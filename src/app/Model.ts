export class Model {
  categoryName:string;
  products:Array<Product>;
  constructor() {
    this.categoryName = 'Telefon';
    // this.products = [
    //   new Product(1,"samsung s5",2000,false),
    //   new Product(2,"samsung s6",4000,false),
    //   new Product(3,"samsung s7",5000,true),
    //   new Product(4,"samsung s8",6000,true),
    //   new Product(5,"samsung s9",7000,true),
    // ];
  }
}
export class Product{
  findIndex(arg0: (x: any) => boolean): any {
    throw new Error('Method not implemented.');
  }
  splice(arg0: any, arg1: number, p: Product) {
    throw new Error('Method not implemented.');
  }
  productId:number;
  name:string;
  price:number;
  isActive:boolean;

  constructor(productId:number,name:string,price:number,isActive:boolean){
    this.productId=productId;
    this.name=name;
    this.price=price;
    this.isActive=isActive;
  }
}
