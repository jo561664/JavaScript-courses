// Código del cuadrado
const cuadrado = (ladoCuadrado)=>{
    
    console.log('Los lados del cuadrado miden: '+ladoCuadrado+' cm');

    const perimetroCuadrado = ladoCuadrado*4;
    console.log('El perímetro del cuadrado es: '+perimetroCuadrado+' cm');

    const areaCuadrado = ladoCuadrado*ladoCuadrado;
    console.log('El área del cuadrado es: '+areaCuadrado+' cm2');

}

// Código del triangulo
const triangulo = (ladoTriangulo1, ladoTriangulo2, ladoTriangulo3, alturaTriangulo)=>{
    
    console.log('Los lados del triangulo miden: '
        +ladoTriangulo1
        +'cm, '
        +ladoTriangulo2
        +'cm, '
        +ladoTriangulo3+'cm'
    );
    console.log('La altura del triangulo es de: '+alturaTriangulo)

    const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+ladoTriangulo3;
    console.log('El perìmetro del triangulo es: '+perimetroTriangulo+'cm')

    const areaTriangulo = (ladoTriangulo3*alturaTriangulo)/2;
    console.log('El área del triangulo es: '+areaTriangulo+'cm2');

}

// Código del círculo
const circulo = (radioCirculo)=>{
        console.log('El radio del círculo es: '+radioCirculo+'cm');
        // Diámetro 
        const diametroCirculo = radioCirculo*2;
        console.log('El diámetro del círculo es: '+diametroCirculo+'cm');
    
        // PI 
        const pi = Math.PI;
        console.log('Pi es: '+pi);
    
        // Perímetro 
        const perimetroCirculo = diametroCirculo*pi;
        console.log('El perìmetro del cìrculo es: '+perimetroCirculo+'cm');
    
        // Área
        const areaCirculo = (radioCirculo*radioCirculo)*pi;
        console.log('El área del circulo es: '+areaCirculo+'cm2');
}

// cuadrado(5);
// triangulo(6, 6, 4, 5.5);
// circulo(4);

$('#calcularCuadrado').on('click', function(){
    let ladoCuadrado = $('#InputCuadrado').val();
    cuadrado(ladoCuadrado);
});



