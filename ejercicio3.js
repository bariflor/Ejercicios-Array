var assert = require("assert");

function ejercicio3(array,multNum){
  var newArray = [];
  array.forEach(function(element){
      if(element%multNum==0){

      newArray.push(element);

       }

  })
  return newArray;
}

var array = [7,21,44,80,77,35];
var multNum = 7;

describe("Prueba ejercicio3", function(){
  it("Si [7,21,44,80,77,35] y 7 deberia ser [7,21,77,35]",function(){
    assert.deepEqual([7,21,77,35],ejercicio3(array,multNum));
  });
});



// Mi Output debe ser []
