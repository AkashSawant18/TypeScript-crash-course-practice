class Customer1 {
     private _firstName: string;
     private _lastName: string;


    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

    constructor(theFirst:string,theLast:string){
            this.firstName = theFirst;
            this.lastName=theLast;
    }

    
}

//lets create an instance
let myCustomer1 = new Customer1("Akash","sawant");

//myCustomer.firstName="Akash";
//myCustomer.lastName="Sawant";

console.log(myCustomer1.firstName);
console.log(myCustomer1.lastName);