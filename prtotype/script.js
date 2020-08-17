// function Pizza() {
//   console.log("Making a pizza")
// };

// const paperoniPizza = new Pizza();
// console.log(paperoniPizza);

const bnt1 = document.querySelector('.btn1');
const bnt2 = document.querySelector('.btn2');

function tellMeAboutTheButton() {
  console.log(this);
  // const that = this;
  setTimeout(() => {
    console.log(this)
    // that.textContent = "You clicked me"
    this.textContent = "You clicked me"
  }, 1000)
};

bnt1.addEventListener('click', tellMeAboutTheButton);
bnt2.addEventListener('click', tellMeAboutTheButton);

function Pizza(toppings=[], customer) {
  this.toppings = toppings;
  this.customer = customer;
  this.id = Date.now();
};

const paperoniPizza = new Pizza( ["pepperonie"], 'wes');
const canadianPizza = new Pizza( ["pepperonie", "salt"," water"], 'Honey');