function getMilk(rateOfMilk) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  var devide = rateOfMilk/1.5;
  console.log(devide);
  var modulo = rateOfMilk%1.5;
  console.log(rateOfMilk);
  var noOfMilk = devide-modulo;
  console.log("get " + noOfMilk + " bottles of milk");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}
getMilk(31);
