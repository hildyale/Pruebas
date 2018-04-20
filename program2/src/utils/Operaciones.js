export default function Operaciones(){
function calcularMediaX(lista_ligada) {
    var suma =0;
    for (var j=0; j < lista_ligada.size(); j++) {
       suma=suma+lista_ligada.valor1(j);
    }
    var media = suma/lista_ligada.size();
    return media;
  }

  function calcularMediaY(lista_ligada) {
    var suma =0;
    for (var j=0; j < lista_ligada.size(); j++) {
       suma=suma+lista_ligada.valor2(j);
    }
    var media = suma/lista_ligada.size();
    return media;
  }

  function calcularSumaXY(lista_ligada){
    var sumaXY = 0;
    for (var i=0; i < lista_ligada.size(); i++) {
      var x = lista_ligada.valor1(i);
      var y = lista_ligada.valor2(i);
      sumaXY = sumaXY + (x*y);
    }
    return sumaXY;
  }

  function calcularSumaCuadradoX(lista_ligada){
    var sumaCuadradoX = 0;
    for (var i=0; i < lista_ligada.size(); i++) {
      var x = lista_ligada.valor1(i);
      sumaCuadradoX = sumaCuadradoX + (x * x);
    }
    return sumaCuadradoX;
  }

  function calcularSumaCuadradoY(lista_ligada){
    var sumaCuadradoY = 0;
    for (var i=0; i < lista_ligada.size(); i++) {
      var y = lista_ligada.valor2(i);
      sumaCuadradoY = sumaCuadradoY + (y * y);
    }
    return sumaCuadradoY;
  }

  function calcularSumaX(lista_ligada){
    var sumaX = 0;
    for (var i=0; i < lista_ligada.size(); i++) {
      var x = lista_ligada.valor1(i);
      sumaX = sumaX + x;
    }
    return sumaX;
  }

  function calcularSumaY(lista_ligada){
    var sumaY = 0;
    for (var i=0; i < lista_ligada.size(); i++) {
      var y = lista_ligada.valor2(i);
      sumaY = sumaY + y;
    }
    return sumaY;
  }

  function calcularB1(lista_ligada){
    var sumaXY = calcularSumaXY(lista_ligada);
    var sumaCuadradaX = calcularSumaCuadradoX(lista_ligada);
    var sumaX = calcularSumaX(lista_ligada);
    //var promedioX = calcularMedia(lista_ligada);
    var mediaX = calcularMediaX(lista_ligada);
    var mediaY = calcularMediaY(lista_ligada);
    var b1 = (sumaXY - (lista_ligada.size()*mediaX*mediaY))/(sumaCuadradaX - ((sumaX*sumaX)/lista_ligada.size()));
    return b1;

  }

  function calcularB0(lista_ligada){
    var mediaY = calcularMediaY(lista_ligada);
    var mediaX = calcularMediaX(lista_ligada);
    var B1 = calcularB1(lista_ligada);
    var B0 = mediaY - (B1*mediaX);
    return B0;
  }

  function calcularCorrelacion(lista_ligada){
    var sumaXY = calcularSumaXY(lista_ligada);
    var sumaCuadradaX = calcularSumaCuadradoX(lista_ligada);
    var sumaCuadradaY = calcularSumaCuadradoY(lista_ligada);
    var sumaX = calcularSumaX(lista_ligada);
    var sumaY = calcularSumaY(lista_ligada);
    var r = ((lista_ligada.size()*sumaXY)-(sumaX*sumaY))/
            (Math.sqrt(((lista_ligada.size()*sumaCuadradaX)-(sumaX*sumaX))*((lista_ligada.size()*sumaCuadradaY)-(sumaY*sumaY))));

    return r;
  }

  function calcularCuadradoR(lista_ligada){
      var r = calcularCorrelacion(lista_ligada);
      return (r*r);
  }
}