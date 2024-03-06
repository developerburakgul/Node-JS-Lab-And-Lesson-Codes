const { number } = require("yargs")

const square = function(number){
    return number*number
}

const square2 = (number)=>{ //! arrow function -JS ES6 feature
    return number*number
}

const square3 = (number) => number*number;

console.log(square(7))
console.log(square2(8))
console.log(square3(9))


const myEvent = {
    name:"xx bebek doğum günü partisi",
    printGuesetList : function (){
        console.log(this.name + " için katılımcı listesi")
    }
}
myEvent.printGuesetList()

const myEvent2 = {
  name: "xx bebek doğum günü partisi",
  printGuesetList: () => { console.log(this.name + " için katılımcı listesi");} ,
};
myEvent2.printGuesetList();
//! arrow functionlar this e erişemez.

const myEvent3 = {
  name: "xx bebek doğum günü partisi",
  guestList : ["Burak","Emirhan","İbrahim"],
  printGuesetList(){
    console.log(this.name + " için katılımcı listesi");
    this.guestList.forEach(function(guest){
        console.log(guest + "," + this.name + " e katılıyor")
    })
  },
};
myEvent3.printGuesetList();

const myEvent4 = {
  name: "xx bebek doğum günü partisi",
  guestList: ["Mehmet", "Ayşe", "Canan"],
  printGuestList() {
    console.log(this.name + " için katılımcı listesi");
    this.guestList.forEach((guest) => {
      console.log(guest + ", " + this.name + "ne katılıyor");
    });
  },
};

myEvent4.printGuestList();