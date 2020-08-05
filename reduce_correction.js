function total(arr) {
  return arr.reduce((sum, value) => sum + value, 0);
}

console.log(total([1,2,3])); // 6

function stringConcat(arr) {
	return arr.reduce((fullString, number) => {
		return `${fullString}${number}`;
	}, '');
}

console.log(stringConcat([1,2,3])); // "123"

function totalVotes(arr) {
	return arr.reduce((count, vote) => {
		return count + vote.voted;
	}, 0);
}

function totalVotesWithFitler(arr) {
	return arr.filter(people => people.voted).length;
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7


function shoppingSpree(arr) {
	return arr.reduce((cost, wish) => {
		return cost + wish.price;
	}, 0);
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005


function flatten(arr) {
	return arr.reduce((flat, array) => {
		return flat.concat(array);
	}, []);
}
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];


var voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
  return arr.reduce((categories, people) => {
      if (people.age >= 18 && people.age <= 25) {
        categories.youth ? categories.youth++ : (categories.youth = 1);
        if (people.voted) {
          categories.youngVotes ? categories.youngVotes++ : (categories.youngVotes = 1);
        }
      } else if (people.age >= 26 && people.age <= 35) {
        categories.mids ? categories.mids++ : (categories.mids = 1);
        if (people.voted) {
          categories.midVotes ? categories.midVotes++ : (categories.midVotes = 1);
        }
      } else if (people.age >= 36 && people.age <= 55) {
        // the same as above, but with a different syntax than ternary
        categories.olds = categories.olds + 1 || 1;
        if (people.voted) {
          categories.oldVotes = categories.oldVotes + 1 || 1;
        }
      } else {
        // people who are 12
        // people who are 60
        console.log('too young or too old, sorry.');
      }
      return categories;
    }, {});
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
youth: 4,
midVotes: 3,
mids: 4,
oldVotes: 3,
olds: 4 
}
*/