export function ListaLigada() {
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
    this.mean = mean;
    this.valor = valor;
    this.eliminar_lista = eliminar_lista;
    this.std = std;

    function tiene_elementos() {
        return lista_size > 0;
    }

    function eliminar_lista() {
        lista_size = 0;
        nodo_cabeza = null;
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

    function size() {
        return lista_size;
    }

    function toString() {
        var nodo_actual = nodo_cabeza;
        var str = '/';
        while (nodo_actual) {
            str += nodo_actual.valor + '/';
            nodo_actual = nodo_actual.siguiente;
        }
        return str;
    }

    function mean() {
        var nodo_actual = nodo_cabeza;
        var sum = 0;
        while (nodo_actual) {
            sum = sum + parseFloat(nodo_actual.valor);
            nodo_actual = nodo_actual.siguiente;
        }
        var promedio = parseFloat(sum)/size();
        promedio = parseFloat(promedio.toFixed(2));
        return promedio;
    }

    function std() {
        var nodo_actual = nodo_cabeza;
        var sum = 0;
        while (nodo_actual) {
            sum = sum + parseFloat(nodo_actual.valor);
            nodo_actual = nodo_actual.siguiente;
        }

        var mean = parseFloat(sum)/size();
        nodo_actual = nodo_cabeza;
        var resta = [];
        while (nodo_actual) {
            resta.push(parseFloat(nodo_actual.valor)-mean);
            nodo_actual = nodo_actual.siguiente;
        }
        var sumaCuadrados= 0;
        resta.forEach( function(valor, indice, array) {
            array[indice] = valor*valor;
            sumaCuadrados = sumaCuadrados + (valor*valor);            
        });
        var resultado = sumaCuadrados/(size()-1);
        resultado = Math.sqrt(resultado);
        resultado = parseFloat(resultado.toFixed(2));
        return resultado;
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
            // Se obtiene y sele asigna la liga
            nodo_actual.siguiente = nodo;
        }
        lista_size++;
    }
}
