class CITY {
  constructor(length, population) {
    this.length = length;
    this.population = population;
  }
  showProperties() {
    console.log(this.length, this.population);
  }
  static showCode() {
    console.log(852);
  }
}
let yangon = new CITY("2343 miles", "234534 person");
class Mandalay extends CITY {
  constructor(length, population) {
    super(length);
    this.population = population;
  }
}
let mdy = new Mandalay("2309");
console.log(mdy.length);
