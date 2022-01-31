/*Funcion que calcula el medio de transporte en base a una distancia determinada*/
function calcularDistancia(distancia){
    if(distancia> 0 && distancia <= 1000){
        document.write("El medio de transporte apropiado es ir a Pie")
    }else if(distancia > 1000 && distancia <= 10000){
        document.write("El medio de transporte apropiado es ir en Bicicleta")
    }else if(distancia > 10000 && distancia <= 30000){
        document.write("El medio de transporte apropiado es ir en Colectivo")
    }else if(distancia > 30000 && distancia <= 100000){
        document.write("El medio de transporte apropiado es ir en Auto")
    }else if(distancia > 100000){
        document.write("El medio de transporte apropiado es ir en Avion")
    }else{
        document.write("No existe un medio de transporte asignado para esta distancia...")
    }
}

/*Funcion para generar un arreglo de tamaño N que se ingresa por teclado*/
function generarArray(){
    let elementos = parseInt(prompt("Cuantos elementos deseas ingresar: "))
    let array = []
    for(let i = 0; i < elementos; i++){
        valor = parseInt(prompt("ingrese elvalor de la posicion "+i+": "))
        array.push(valor)
    }
    return array
}

/*Funcion que calcula el maximo de un arreglo */
function calcularMax(array){
    let max = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i]
        }
    }
    return max
}

let distancia = parseInt(prompt("Ingrese una distancia: "))
calcularDistancia(distancia)

let array = generarArray()
document.write("<br> El numero mas grande del arreglo ["+ array +"] es: "+calcularMax(array))
