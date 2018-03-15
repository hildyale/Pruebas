export function lista_ligada() {

    var Nodo = function(valor1, valor2){
        this.valor1 = valor1;
        this.valor2 = valor2;
        this.siguiente = null;
    };

    var lista_size = 0;
    var nodo_cabeza = null;

    this.insertar = insertar;
    this.tiene_elementos = tiene_elementos;
    this.size = size;
    this.toString = toString;
    this.valor1 = valor1;
    this.valor2 = valor2;
    this.eliminar_lista = eliminar_lista;
    this.calcularMediaY = calcularMediaY;
    this.calcularMediaX = calcularMediaX;
    this.calcularSumaXY = calcularSumaXY;
    this.calcularB0 = calcularB0;
    this.calcularB1 = calcularB1;
    this.calcularCorrelacion = calcularCorrelacion;
    this.calcularSumaX =  calcularSumaX;
    this.calcularSumaY = calcularSumaY;
    this.calcularSumaCuadradoX = calcularSumaCuadradoX;
    this.calcularSumaCuadradoY = calcularSumaCuadradoY;
    this.calcularCuadradoR = calcularCuadradoR;

    function tiene_elementos() {
        return lista_size > 0;
    }

    function size() {
        return lista_size;
    }

    function toString() {
        var nodo_actual = nodo_cabeza;
        var str = '/';
        while (nodo_actual) {
            str += nodo_actual.valor1+','+nodo_actual.valor2 + '/';
            nodo_actual = nodo_actual.siguiente;
        }
        return str;
    }

    function eliminar_lista() {
      lista_size = 0;
      nodo_cabeza = null;
    }


    function insertar(valor1, valor2) {
        var nodo = new Nodo(valor1, valor2);
        var nodo_actual;

        //Se verifica si es el primer nodo
        if (!nodo_cabeza) {
            nodo_cabeza = nodo;
        } else {
            nodo_actual = nodo_cabeza;
            // llegamos a la última posición de la lista
            while (nodo_actual.siguiente) {
                nodo_actual = nodo_actual.siguiente;
            }
            // Se obtiene y se le asigna la liga
            nodo_actual.siguiente = nodo;
        }
        lista_size++;
    }

    function valor1(posicion) {
        // Se verifica si la posicicón existe
        if (posicion > -1 && posicion < lista_size) {
            var nodo_actual = nodo_cabeza;
            var indice = 0;
            while (indice<posicion) {
                nodo_actual=nodo_actual.siguiente;
                indice++;
            }
            return nodo_actual.valor1;

        }
        return null;
    }
    function valor2(posicion) {
        // Se verifica si la posicicón existe
        if (posicion > -1 && posicion < lista_size) {
            var nodo_actual = nodo_cabeza;
            var indice = 0;
            while (indice<posicion) {
                nodo_actual=nodo_actual.siguiente;
                indice++;
            }
            return nodo_actual.valor2;

        }
        return null;
    }
  }

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
    return parseFloat(b1,10);

  }

  function calcularB0(lista_ligada){
    var mediaY = calcularMediaY(lista_ligada);
    var mediaX = calcularMediaX(lista_ligada);
    var B1 = calcularB1(lista_ligada);
    var B0 = mediaY - (B1*mediaX);
    return parseFloat((B0),10);
  }

  function calcularCorrelacion(lista_ligada){
    var sumaXY = calcularSumaXY(lista_ligada);
    var sumaCuadradaX = calcularSumaCuadradoX(lista_ligada);
    var sumaCuadradaY = calcularSumaCuadradoY(lista_ligada);
    var sumaX = calcularSumaX(lista_ligada);
    var sumaY = calcularSumaY(lista_ligada);
    var r = ((lista_ligada.size()*sumaXY)-(sumaX*sumaY))/
            (Math.sqrt(((lista_ligada.size()*sumaCuadradaX)-(sumaX*sumaX))*((lista_ligada.size()*sumaCuadradaY)-(sumaY*sumaY))));

    return parseFloat(r,10);
  }

  function calcularCuadradoR(lista_ligada){
      var r = calcularCorrelacion(lista_ligada);
      return parseFloat((r*r),10);
  }

 
