interface dateInter
{
    currentDate:Date; 
    disp():void;
    
}


class Car implements dateInter { 
    //field 
    currentDate:Date; 
    //constructor 
    constructor() { 
     
    }  
 
    //function 
    disp():void { 
       
       this.currentDate = new Date();
       console.log("date is "+this.currentDate)
    } 
}
    //create an object 
var obj = new Car()

obj.disp()
 