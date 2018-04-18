/**************************************************************************************************************/
/* version:2.1.1 */
/* Esta Funcion se encarga de Leer el archivo */
/**************************************************************************************************************/
function leerArchivo(lista){
document.getElementById("archivo").addEventListener('change', handleFileSelect, false);
   function handleFileSelect(evt){
            var files = evt.target.files;
            var data = '';
            for (var i = 0, f; f = files[i]; i++) {
                var reader = new FileReader();  //Se lee el  archivo
                reader.onload = (function (theFile) {
                    return function (e) {
                        try {
                            data = e.target.result;//Se guardan los datos
                            lista.dividir(data)
                            var [funciones,items,size] = lista.contar();
                            var partSize = lista.contarlineas();
                            var valores = document.getElementById("valores");
                            var h1Funciones = document.createElement("p");
                            var h1Items = document.createElement("p");
                            var h1Size = document.createElement("p");
                            var h1partSize = document.createElement("p");
                            h1Funciones.innerHTML = "<b>Funciones: </b>"+funciones;
                            h1Items.innerHTML = "<b>Items: </b>"+items;
                            h1Size.innerHTML = "<b>Lineas Totales: </b>"+size;
                            h1partSize.innerHTML = "<b>partSize: </b>"+partSize;
                            valores.appendChild(h1Funciones);  
                            valores.appendChild(h1Items); 
                            valores.appendChild(h1Size); 
                            valores.appendChild(h1partSize);  
                                      
                        } catch (ex) {
                            alert('Error: ' + ex);
                        }
                    }
                })(f);
                reader.readAsText(f);
            }
   }
}
