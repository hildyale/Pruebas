/**************************************************************************************************************/
/* version: 2.1 */
/* Esta Funcion es la lista ligada modificada y con los metodos que nesesitamos */
/**************************************************************************************************************/
function lista_ligada() {
    var Nodo = function(valor){
        this.valor = valor;
        this.siguiente = null;
    };

    var lista_size = 0;
    var nodo_cabeza = null;

    this.insertar = insertar;
    this.tiene_elementos = tiene_elementos;
    this.size = size;
    this.toString = toString;
    this.valor = valor;
    this.eliminar_lista = eliminar_lista;
    this.dividir = dividir;
    this.contar = contar;
    this.contarlineas = contarlineas;

    /**funcion para ver si la lista ligada tiene elementos */
    function tiene_elementos() {
        return lista_size > 0;
    }

    /**funcion para ver el tamaño de la lista ligada */
    function size() {
        return lista_size;
    }

    /**funcion para ver si la lista ligada tiene elementos */
    function toString() {
        var nodo_actual = nodo_cabeza;
        var str = '/';
        while (nodo_actual) {
            str += nodo_actual.valor + '/';
            nodo_actual = nodo_actual.siguiente;
        }
        return str;
    }

    function eliminar_lista() {
      lista_size = 0;
      nodo_cabeza = null;
    }

    function dividir(cadena) {
      var datos_array = cadena.split('\n'); //separapor salto de linea
      for (var i=0; i < datos_array.length; i++) {
        insertar(datos_array[i]);
      }
    }

    function insertar(valor) {
        var nodo = new Nodo(valor);
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
    function valor(posicion) {
        // Se verifica si la posicicón existe
        if (posicion > -1 && posicion < lista_size) {
            var nodo_actual = nodo_cabeza;
            var indice = 0;
            while (indice<posicion) {
                nodo_actual=nodo_actual.siguiente;
                indice++;
            }
            return nodo_actual.valor;

        }
        return null;
    }
  }
//Método encargado de contar los elementos que  poseeel  archivo
  function contar(){
    var funciones_array=["function","export","while","for","if","else"]
    var numFunciones=0
    var numItems=0
    var tama=0
    var letra=""
    var palabra=""
    var linea=""
    while (tama<lista_ligada.size()) {
      linea=lista_ligada.valor(tama)
      linea=linea.replace(/\s/g, '_');
      for (var i = 0; i < linea.length; i++) {
        letra=linea.charAt(i)
        if (letra==="_") {
          if (i!=0 && palabra.length>1) {
            break
          }
        }
        else{
          palabra=palabra.concat(letra)
        }
        letra=""
      }
      if (palabra==funciones_array[0] || palabra==funciones_array[1]) {
        numFunciones++
      }
      for (var i = 2; i < funciones_array.length; i++) {
        if (palabra===funciones_array[i]) {
          numItems++
        }
      }
      palabra=""
    tama++
    }
    console.log("Funciones",numFunciones);
    console.log("Items",numItems);
    console.log("Total",lista_ligada.size()-1);
    return [numFunciones,numItems,lista_ligada.size()-1]
  }
//Método encargado decontar el partSize
  function contarlineas(){
    var funciones_array=["function","export","while","for","if","else"]
    var partSizeConta=[]
    var numFunciones=0
    var numItems=0
    var tama=0
    var numero=6
    var encuentraFuncion=0
    var contadorlineas=0
    var contadorInicio=0
    var flag=false
    var flag2=true
    var letra=""
    var palabra=""
    var linea=""
    while (tama<lista_ligada.size()) {
      linea=lista_ligada.valor(tama)
      linea=linea.replace(/\s/g, '_');
      for (var i = 0; i < linea.length; i++) {
        letra=linea.charAt(i)
        if (letra==="_") {
          if (i!=0 && palabra.length>1) {
            break
          }
        }
        else{
          if (letra==="}") {
            var letra2 =linea.charAt(i+1)
            if (letra2===";") {
              palabra=palabra.concat(letra2)
            }
            else {
              palabra=palabra.concat(letra)
            }
          }
          else {
            palabra=palabra.concat(letra)
          }
        }
        letra=""
      }
      if (palabra===funciones_array[0] || palabra===funciones_array[1]) {
        flag=true
        contadorInicio++
        numFunciones++
        if (flag2) {
          encuentraFuncion=tama
        }
        flag2=false
      }
      for (var i = 2; i < funciones_array.length; i++) {
        if (palabra===funciones_array[i]) {
          numItems++
          contadorInicio++
        }
      }

      if (palabra==="}") {
        contadorInicio--
        if (contadorInicio==0) {
          flag=false
          partSizeConta.push(contadorlineas)
          contadorlineas=0
          tama=encuentraFuncion
          flag2=true
          break
        }
      }

      if (flag) {
        contadorlineas++
      }
      palabra=""
    tama++
    }
    for (var i = 0; i < partSizeConta.length; i++) {
      console.log("ParSize",partSizeConta[i]);
    }
    return partSizeConta[0]
  }
