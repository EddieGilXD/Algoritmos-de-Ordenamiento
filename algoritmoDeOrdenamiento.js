function ingresarDatos() {    
    let i = 1;
    let listaDeNumeros = [];
    while (i <= 1000) {        
        let x = Math.floor(Math.random()*10000);
        listaDeNumeros.push(x);
        i++;        
    }   
    return listaDeNumeros;
}

function bubleSort(lista) {    
    x = lista.length;

    for (j = 1 ; j <= x ; j++){
        for (i = 0; i < (x-j); i++){
            if (lista[i] > lista[i + 1]){
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }        
    }
    return lista;
}

function selectionSort(lista) {
    if (lista.length < 2) return lista;
    let min;
    let index;

    for (i = 0 ; i < lista.length; i++){
        min = lista[i];
        for (j = i+1; j < lista.length; j++) {
            if (min > lista[j]){
                min = lista[j];
                index = j;
            }
        }
        if (index){
            [lista[i], lista[index]] = [lista[index]] = [lista[index], lista[i]]
            index = undefined;
        }
    }
    return lista;
}

function insertionSort(lista) {
    let valToInsert = lista[1];
    let j;
    for ( i = 1 ; i < lista.length; i++) {
        valToInsert = lista[i];
        for(j = i - 1; j >= 0 && lista[j] > valToInsert; j--){
            lista[j+1] = lista[j];
        }
        lista[j+1] = valToInsert;
    }
    return lista;
}

function mergeSort(lista) {
    if (lista.length <= 1) {
        return lista;
    }

    const mitad = Math.floor(lista.length / 2);
    const arr1 = mergeSort(lista.slice(0, mitad)); 
    const arr2 = mergeSort(lista.slice(mitad)); 

    return merge(arr1, arr2);
}

function merge(arr1, arr2) {
    const result = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] <= arr2[0]) {
            result.push(arr1.shift());
        } else {
            result.push(arr2.shift());
        }
    }
    return [...result, ...arr1, ...arr2]; 
}

function quickSort (lista) {
    if (lista.length < 2) return lista;

    const pivot = lista[0];
    const smaller = [];
    const bigger = [];
    for( i = 1; i < lista.length; i++){
        if(lista[i] < pivot) smaller.push(lista[i]);
        else bigger.push(lista[i]);
    }
    return [...quickSort(smaller), pivot, ...quickSort(bigger)];
}

let start = performance.now();
let lista = ingresarDatos();
console.log(lista);
let end = performance.now();
console.log(`Tiempo de ejecución de mergeSort: ${end - start} milisegundos`);

start = performance.now();
bubleSortLista = bubleSort(lista);
console.log("Resultado de ordenamiento al utilizar BuubleSort: " + bubleSortLista);
end = performance.now();
console.log(`Tiempo de ejecución de mergeSort: ${end - start} milisegundos`);

start = performance.now();
selectionSortLista = selectionSort(lista);
console.log("Resultado de ordenamiento al utilizar SelectionSort: " + selectionSortLista);
end = performance.now();
console.log(`Tiempo de ejecución de mergeSort: ${end - start} milisegundos`);

start = performance.now();
insertionSortLista = insertionSort(lista);
console.log(insertionSortLista);
end = performance.now();
console.log(`Tiempo de ejecución de mergeSort: ${end - start} milisegundos`);

start = performance.now();
mergeSortLista = mergeSort(lista);
console.log(mergeSortLista);
end = performance.now();
console.log(`Tiempo de ejecución de mergeSort: ${end - start} milisegundos`);

start = performance.now();
quickSortLista = quickSort(lista);
console.log(quickSortLista);
end = performance.now();
console.log(`Tiempo de ejecución de mergeSort: ${end - start} milisegundos`);