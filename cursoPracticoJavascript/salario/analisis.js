const salariosCol = colombia.map((persona)=>{
    return persona.salary;
});

// Ordenar arreglo
const salariosColSorted = salariosCol.sort((salaryA, salaryB)=>{
    return salaryA - salaryB;
})


const espar = (numero)=>{
    if(numero%2===0){
        return true;
    }else{
        return false;
    }
}

const medianaSalarios = (lista)=>{
    const mitad = parseInt(lista.length/2);
    if(espar(lista.length)){
        const personaMitad1 = lista[mitad-1];
        const personaMitad2 = lista[mitad];
        const mediana = (personaMitad1+personaMitad2)/2;
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}



console.log(medianaSalarios(salariosColSorted));