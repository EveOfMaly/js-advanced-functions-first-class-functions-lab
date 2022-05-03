// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(drivers) {
   const newArray = drivers.slice() //duplicate drivers
   newArray.splice(-2) //remove last two elements
   return newArray
}


function returnLastTwoDrivers(drivers) {
    const newArray = drivers.slice() //duplicate drivers
    let lasttwo = newArray.splice(-2) //last two elements  elements
    return lasttwo //return first two
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  


  const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };