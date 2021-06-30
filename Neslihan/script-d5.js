//------------------------------BASIC----OBJECTS----------------------------------

//----------------------------car
var car1 = {
    brand: "Audi",
    PS: 60,
    constructed: 2001,
    gearbox: "manual", //Getriebe
    description: function(){
        return this.brand + `: ` + this.PS + `PS; construction year: ` + this.constructed;
    }
}

var car2 = {
    brand: "Toyota",
    PS: 120,
    constructed: 2005,
    gearbox: "manual", //Getriebe
    description: function(){
        return this.brand + `: ` + this.PS + `PS; construction year: ` + this.constructed;
    }
}

var car3 = {
    brand: "BMW",
    PS: 90,
    constructed: 2003,
    gearbox: "automatic", //Getriebe
    description: function(){
        return this.brand + `: ` + this.PS + `PS; construction year: ` + this.constructed;
    }
}


//----------------------------animal

var animal1 = {
    type: "dog",
    age: 4,
    domestic_animal: true, //Haustier
    description: function(){
        return `Type of animal: ` + this.type + `; age: ` + this.age;
    }
}

var animal2 = {
    type: "monkey",
    age: 7,
    domestic_animal: false, //Haustier
    description: function(){
        return `Type of animal: ` + this.type + `; age: ` + this.age;
    }
}

var animal3 = {
    type: "butterfly",
    age: 0.5,
    domestic_animal: false, //Haustier
    description: function(){
        return `Type of animal: ` + this.type + `; age: ` + this.age;
    }
}


//----------------------------person

var person1 = {
    fullname: ["Neslihan", "Minaz"],
    age: 30,
    profession: "developer",
    introducing: function(){
        return `Hi I am ` + this.fullname[0] + `, I am ` + this.age + ` years old and I am a ` + this.profession;
    }
}

var person2 = {
    fullname: ["Merlin", "Teraf"],
    age: 10,
    profession: "student",
    introducing: function(){
        return `Hi I am ` + this.fullname[0] + `, I am ` + this.age + ` years old and I am a ` + this.profession;
    }
}


var person3 = {
    fullname: ["Julia", "Teraf"],
    age: 7,
    profession: "student",
    introducing: function(){
        return `Hi I am ` + this.fullname[0] + `, I am ` + this.age + ` years old and I am a ` + this.profession;
    }
}


console.log("The second car is a " + car2.brand + " and has " + car2.PS + " PS.");
console.log("The first animal is a " + animal1.type + " and is " + animal1.age + " years old.");
console.log("The third person is " + person3.fullname[0] +" "+ person3.fullname[1] + ". She is a " + person3.profession + " and is " + person3.age + " years old.");
console.log(car1.description());
console.log(animal1.description());
console.log(person3.introducing());

document.write(car2.description()+"<br>");
document.write(animal2.description()+"<br>");
document.write(person3.introducing()+"<br>");


//------------------------------BASIC----CLASSES----------------------------------

class Car {
    brand;
    PS;
    construction_year;

    constructor(a,b,c){
        this.brand=a;
        this.PS = b;
        this.construction_year = c;
    }

    description(){
        return this.brand + `: ` + this.PS + `PS; construction year: ` + this.construction_year;
    }
}

var car4 = new Car("BMW",60,2001);
document.write(car4.description() + "<br>");


class Animal {
    type;
    age;
    domestic_animal;

    constructor(a,b,c){
        this.type=a;
        this.age=b;
        this.domestic_animal=c;
    }

    description(){
        return `Type of animal: ` + this.type + `; age: ` + this.age;
    }

}

var animal4 = new Animal("Cat",6,true);
document.write(animal4.description() + "<br>");


class Person {
    fname;
    lname;
    age;
    profession;

    constructor(a,b,c,d){
        this.fname = a;
        this.lname = b;
        this.age = c;
        this.profession = d;
    }

    introducing(){
        return `Hi I am ` + this.fname + `, I am ` + this.age + ` years old and I am a ` + this.profession;
    }
}

var person4 = new Person("Max","Mustermann",94,"retiree");
document.write(person4.introducing() + "<br>");


//------------------------------INTERMEDIATE----CLASSES----------------------------------

class Motorbike extends Car{
    nr_of_wheels;

    constructor(a,b,c,d){
        super(a,b,c);
        this.nr_of_wheels = d;
    }
    description(){
        return super.description() + `; number of wheels: ` + this.nr_of_wheels;
    }
}

var moto1 = new Motorbike("VW", 40, 2007, 2);
document.write(moto1.description() +  "<br>");


class Dog extends Animal{
    race;
    food;
    max_age;

    constructor(type,age,domestic,race,food,max_age){
        super(type,age,domestic);
        this.race = race;
        this.food = food;
        this.max_age = max_age;
    }

    description(){
        return super.description() + ` race: ` + this.race +  `. They love eating ` + this.food + ` and they can live up to ` + this.max_age + ` years.`;
    }
}

var dog1 = new Dog("dog",7,true,"Poodle","everything",17);
document.write(dog1.description() + "<br>");


class Profession extends Person{
    education;
    certification;
    position;

    constructor(fname, lname, age, prof,education, certification, position){
        super(fname,lname,age,prof)
        this.education = education;
        this.certification = certification;
        this.position = position;
    }

    introducing(){
        return super.introducing() + `. I studied ` + this.education + ` and now I am a ` + this.position;
    }
}

var person4 = new Profession("Tina","Rax","35","vendor","law",false,"self employed Poet :-)");
document.write(person4.introducing()+"<br>");


//------------------------------EXTRA----------------------------------

class Hotel{
    hotelName;
    nrOfNights = Math.floor(Math.random()*11);
    nrOfAvailableNights = Math.floor(Math.random()*21);
    address;
    image;

    constructor(name,addr,img){
        this.hotelName = name;
        this.address = addr;
        this.image = img;
    }

    showAvailability(){
        var result = ``;
        if (this.nrOfNights<=this.nrOfAvailableNights){
            result = `I'll reserve`;
        }else{
            result = `Sorry, no available nights for` + this.hotelName;
        }
        return result;
    }
}

var hotel1 = new Hotel("QWERTZ","Creative Street 106, 1234 Pederobbe", "https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789__340.jpg");
console.log(hotel1.showAvailability());