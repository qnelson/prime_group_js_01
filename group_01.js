//variables from in-class problem, changed variable names to array+name
var arrayAtticus = ['Atticus', '2405', '47000', 3];
var arrayJem = ['Jem', '62347', '63500', 4];
var arrayBoo = ['Boo', '11435', '54000', 3];
var arrayScout = ['Scout', '6243', '74750', 5];

//Constructor function
function Person(name, number, salary, rating) {
  this.name = name;
  this.number = number;
  this.salary = salary;
  this.rating = rating;
}

//Instances of Person
var atticus = new Person('Atticus', '2405', '47000', 3);
var jem = new Person('Jem', '62347', '63500', 4);
var boo = new Person('Boo', '11435', '54000', 3);
var scout = new Person('Scout', '6243', '74750', 5);
var employees = [atticus, jem, boo, scout];

//function calculates any given employees' bonus
var sti = function (person) {
  var rating = person.rating;
  var bonusPercentage = 0;

  //bonusPercentage calculated using employees' rating
  if (rating <= 2) {
    bonusPercentage = 0;
  } else if (rating == 3) {
    bonusPercentage = 0.04;
  } else if (rating == 4) {
    bonusPercentage = 0.06;
  } else {
    bonusPercentage = 0.1;
  }

  //bonusPercentage calculated if employee has tenure
  if (person.number.length == 4) {
    bonusPercentage += 0.05;
  }

  //bonusPercentage reduction if salary is greater than 65000
  if (person.salary > 65000) {
    bonusPercentage -= 0.01;
  }

  //bonusPercentage capped at 13%
  if (bonusPercentage > 0.13) {
    bonusPercentage = 0.13;
  }

  return bonusPercentage;
};

//function takes the employees name, bonus percentage, new base salary + bonus, id number
//and pushes it to an empty array
var newArr = function (person) {
  var arr2 = [];

  arr2.push(person.name);
  arr2.push(sti(person).toFixed(2));
  arr2.push(Math.round(person.salary * (1 + sti(person))));
  var bonusTotal = Math.round(person.salary * sti(person));
  arr2.push(bonusTotal);
  return arr2;
};

//logic that loops through the employees array using the newArr function
//console.log returns the parameters for each employee using newArr and
//pushes the values to individual empty arrays
var finalArray = [];

for (var i = 0; i < employees.length; i++) {
  var final = newArr(employees[i]);
  finalArray.push(final);
  console.log(finalArray[i]);
}

/*

Atticus: 9% Bonus: 4% (rating), 5% (tenure)
47000 * .09 = $4230
Total: $51230

Jem: 6% Bonus: 6% (rating)
63500 * .06 = $3810
Total: $67310

Boo: 4% Bonus: 4% (rating)
54000 * .04 = $2160
Total: $56160

Scout: 13% Bonus: 10% (rating), 5% (tenure),
-1% (salary limit) Bonus !> 13%
74750 * .13 = $9717.5
Total: $84467.5

*/
