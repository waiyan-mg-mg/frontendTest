// let person = new Object();
// person.name = "Waiyan Maung";
// person.age = 23;

// console.log(person);
function Phone(modal, price, color) {
  this.modal = modal;
  this.price = price;
  this.color = color;
}
Phone.prototype.dollerPrice = function () {
  let price = this.price.split(" ");
  return Number(price[0]) / 3100;
};
let i_phone = new Phone();
i_phone.color = 3;
i_phone.modal = "apple";
i_phone.price = "8640 MMK";

function GPS_PHONE(modal, price, color, ip) {
  Phone.call(this, modal, price, color);
  this.ip = ip;
}
GPS_PHONE.prototype = Object.create(Phone.prototype);
let starlink = new GPS_PHONE("general use", '43434 mmk', "gray", "192.1688.82.");
console.table(starlink.dollerPrice());
