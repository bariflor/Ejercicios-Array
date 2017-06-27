var assert = require("assert");
function ejercicio1(celulares, num) {
  var numSelect =  celulares.filter(impares);

  function impares(celular){
    var rest1 = celular.toString().substr(0,3);
    var rest2 = celular.toString().substr(6,3);

    if(rest1==num || rest2==num){
      return true;
    }
    else{
      return false;
    }


  }
  return numSelect;

}
var celulares = [784123123, 355676784, 3423543554];
var num = 784;

describe("Prueba ejercicio2", function(){
  it("Si [784123123, 355676784, 3423543554] y 784 deberia ser [784123123, 355676784]",function(){
    assert.deepEqual([784123123, 355676784],ejercicio1(celulares,num));
  });
});
