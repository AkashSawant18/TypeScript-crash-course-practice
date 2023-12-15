var Customer1 = /** @class */ (function () {
    function Customer1(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    Object.defineProperty(Customer1.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer1.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer1;
}());
//lets create an instance
var myCustomer1 = new Customer1("Akash", "sawant");
//myCustomer.firstName="Akash";
//myCustomer.lastName="Sawant";
console.log(myCustomer1.firstName);
console.log(myCustomer1.lastName);
