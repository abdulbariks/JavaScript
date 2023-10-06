// JavaScript Classes
 class User {
      constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
      }
      fullname(){
        console.log(`FullName :${this.fname} ${this.lname}`);
      }
 }
 
 let user1 = new User('abdul', 'barik');
 let user2 = new User('rasel', 'islam');
 console.log(user1);
 console.log(user2.fullname());

 class User1 {
  constructor(fname, lname, dob){
    this.fname = fname;
    this.lname = lname;
    this.dob = dob; 
  }
  calculateAge () {
    let birthdate = new Date(this.dob);
    let diff = Date.now()- birthdate.getTime();
    let ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()-1970);
  }    
}

let user3 = new User1('abdul', 'barik','03-04-1997');
let user4 = new User1('rasel', 'islam', '04-05-1998');
console.log(user3, user3.calculateAge());
console.log(user4);


// JavaScript Class Inheritance
class Person {
 constructor(fname, lname, dob){
  this.fname = fname;
  this.lname = lname;
 }

}

class newPerson extends Person{
  constructor(fname, lname, dob){
    super(fname, lname)
    this.dob = dob; 
  }
}

let person1 = new newPerson('Abdul', 'Barik', '03-04-1997');
console.log(person1); 

// JavaScript Static Methods
class Person3 {
  constructor(fname, lname){
   this.fname = fname;
   this.lname = lname;
  }
  fullname1(){
    console.log(`FullName :${this.fname} ${this.lname}`);
  }

  static  fullname2(){
    console.log(`I am Static Function`);
  }

}

let person3 = new Person3('Rahat', 'Rafat');
console.log(person3.fullname1());
// Static function can be called object
console.log(Person3.fullname2());