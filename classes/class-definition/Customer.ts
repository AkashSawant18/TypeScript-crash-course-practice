class Customer {
    firstName:string;
    lastName:string;

    constructor(theFirst:string,theLast:string){
            this.firstName = theFirst;
            this.lastName=theLast;
    }
}

//lets create an instance
let myCustomer = new Customer("Akash","sawant");

//myCustomer.firstName="Akash";
//myCustomer.lastName="Sawant";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);