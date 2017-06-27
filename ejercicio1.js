
var assert = require("assert");
function ejercicio1(arr,num){
  arr.push(num);
  return arr.reduce(function(valorAnterior, valorActual)
   {
    return valorAnterior * valorActual;
     });
}
var arr = [4,4,5,12];
var num = 9;



describe("Prueba ejercicio1", function(){
  it("Si [4,4,5,12] y 9 deberia ser 8640",function(){
    assert.equal(8640,ejercicio1(arr,num));
  });
});
