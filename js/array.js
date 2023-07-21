document.querySelector("h1").textContent = "Hi Array";

let mails = Array("hotmail", "yahoo", "gamil");

// console.log(mails[0]);
let topTeachCompany = ["google", "amazon", "facebook", "tiktok", "youtube"];
// topTeachCompany.map((element) => {
//     console.log(`index of ${topTeachCompany.indexOf(element)} is ${element}`);
// })
// let i = 0;
// change first element to last & last element to first
// let lastElement = topTeachCompany.pop();
// topTeachCompany[topTeachCompany.length - 1] = topTeachCompany.shift();
// topTeachCompany.unshift(lastElement);
// print array element with while
// while (i < topTeachCompany.length) {
//     console.log(topTeachCompany[i]);
//     i++;

// }; console.log(topTeachCompany.length);
//  array argument in function
// let printAllElement = (...arrayElement) => {
//   console.log(...arrayElement, "done");
// };
// printAllElement(...topTeachCompany);
// object / associate array
let OurCustomers = [
  { Name: "mgmmg", Age: 23, SuppilerTown: "Yangon" },
  { Name: "AungSoe", Age: 85, SuppilerTown: "Naypyitaw" },
  { Name: "Ko Aung Hla", Age: 25, SuppilerTown: "Taung Gyi" },
  { Name: "U Min Ko Ko", Age: 70, SuppilerTown: "Mandalay" },
];
let OurNewCustomers = [
  { Name: "Soe", Age: 45, SuppilerTown: "Pyay" },
  { Name: "Myin", Age: 33, SuppilerTown: "Magway" },
  { Name: "Htwe", Age: 18, SuppilerTown: "Hintada" },
  { Name: "Sandar", Age: 55, SuppilerTown: "Maw Kyune" },
];
// let newMerge = [...OurCustomers, ...OurNewCustomers];
// console.table(newMerge);
// ============================= challenge
// let newMerge = [...OurCustomers];
// let temp = [];
// let whileInitial = 0;
// let whileState = 0;
// for (let e = 0; e < OurNewCustomers.length; e++) {
//   while (whileInitial <= e) {
//     temp.push(newMerge.shift());
//     whileInitial++;
//   }
//   //   console.table(temp);
//   newMerge.unshift(OurNewCustomers[e]);

//   newMerge.unshift(...temp);
//   console.table(newMerge);
//   whileInitial = 0;
//   temp.length = 0;
// }
// console.table(temp);

let ttc = ["google", "amazon", "facebook", "tiktok", "youtube"];
let tsu = ["Harvard", "Lincoln", "NCC", "ABE", "LCCi"];

let newArr = ttc.concat(tsu, ttn);
console.table(newArr);
