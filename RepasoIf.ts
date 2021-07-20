//PUNTO 1
function Signo(dia , mes){
    
    if (mes === "Diciembre" && dia >= 22 || mes === "Enero" && dia <= 20) 
    {
        return ("Tu signo es Capricornio");
    } 
    else if (mes === "Enero" && dia >= 21 || mes === "Febrero" && dia <= 19) 
    {
        return ("Tu signo es Acuario");
    } 
    else if (mes === "Febrero" && dia >= 20 || mes === "Marzo" && dia <= 20) 
    {
        return ("Tu signo es Piscis");
    } 
    else if (mes === "Marzo" && dia >= 21 || mes === "Abril" && dia <= 20) 
    {
        return ("Tu signo es Aries");
    } 
    else if (mes === "Abril" && dia >= 21 || mes === "Mayo" && dia <= 21) 
    {
        return ("Tu signo es Tauro");
    } 
    else if (mes === "Mayo" && dia >= 22 || mes === "Junio" && dia <= 21) 
    {
        return ("Tu signo es Geminis");
    } 
    else if (mes === "Junio" && dia >= 22 || mes === "Julio" && dia <= 23) 
    {
        return ("Tu signo es Cancer");
    } 
    else if (mes === "Julio" && dia >= 24 || mes === "Agosto" && dia <= 23) 
    {
        return ("Tu signo es Leo");
    } 
    else if (mes === "Agosto" && dia >= 24 || mes === "Septiembre" && dia <= 23) 
    {
        return ("Tu signo es Virgo");
    } 
    else if (mes === "Septiembre" && dia >= 24 || mes === "Octubre" && dia <= 23) 
    {
        return ("Tu signo es Libra");
    } 
    else if (mes === "Octubre" && dia >= 24 || mes === "Noviembre" && dia <= 22) 
    {
        return ("Tu signo es Escorpio");
    } 
    else if (mes === "Noviembre" && dia >= 23 || mes === "Diciembre" && dia <= 22) 
    {
        return ("Tu signo es Sagitario");
    }
    else{
        console.log("Indique el dia y su mes de nacimiento");
        
    }
}

//PUNTO 2
function continentes(Pais) 
{
    if (Pais === "Japon" || Pais === "China" || Pais === "Tailandia") 
    {
        console.log(Pais + " Asia");
    } 
    else if (Pais === "España" || Pais === "Inglaterra" || Pais === "Italia" || Pais=== "Francia" || Pais === "Turquia") 
    {
        console.log(Pais + " Europa");
    } 
    else if (Pais === "Estados Unidos" || Pais === "Canada" || Pais === "Argentina" || Pais === "Brasil") 
    {
        console.log(Pais + " America");
    } 
    else if (Pais === "Nigeria" || Pais === "Egipto" || Pais === "Marruecos" || Pais === "Kenia") 
    {
        console.log(Pais + " Africa");
    } 
    else if (Pais === "Australia" || Pais === "Nueva Zelanda" || Pais === "Fiyi") {
        console.log(Pais + " Oceania");
    } 
    else {
        console.log("Escribe un pais correcto");
    }
};

function existe(numero)
{
    if(numero %2 === 0)
    {
        return "El numero es par"
    }
    else
    {
        return "El numero es impar"
    }
}
