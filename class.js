// class person 
// {    constructor (firstName, lastName)
//     {
//         this.firstName = "Bilal";
//         this.lastName = "RAFIQ";
//     }
//     getFullName()
//     {
//         return `the ${this.firstName} and ${this.lastName}`;

//     }
// }
// const person1 = new person("bilal", "rafiq");
// console.log(person1.getFullName())


// Function Constructor 
function Car (make, model)
{
    this.make= make;
    this.model = model;
}
const car1= new Car("Toyata","2020");

const car2= new Car("Honda","civic");
console.log(car1);
console.log(car2);
