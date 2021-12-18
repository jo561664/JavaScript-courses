
const calcularPrecioConDescuento = (precioOriginal, descuento)=>{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;
    console.log({precioOriginal, descuento, porcentajePrecioConDescuento, precioConDescuento});
}

calcularPrecioConDescuento(120, 15);
