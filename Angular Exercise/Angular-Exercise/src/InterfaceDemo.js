var Car = /** @class */ (function () {
    //constructor 
    function Car() {
    }
    //function 
    Car.prototype.disp = function () {
        this.currentDate = new Date();
        console.log("date is" + this.currentDate);
    };
    return Car;
}());
//create an object 
var obj = new Car();
obj.disp();
