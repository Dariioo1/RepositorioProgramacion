function imparExistente(n) {
    for (let i = 0; i < n; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
function arr(colores) {
    
    for (let i=0; i<colores.length;i++){
        if(colores[i] === "Amarillo" || colores[i] === "Verde" || colores[i] === "Rojo" || colores[i]==="Azul" || colores[i] === "Naranja" || colores[i] === "Morado" || colores[i] === "Verde")
        {
            console.log("Este color " + colores[i] + " se encuentra en el arcoiris ");
            
        }
        else{
            console.log("Este color " + colores[i] + " no se encuentra en el arcoiris ");
            
        }
    }
}


let caracteres =  ["Dario", "Programador" , "Casa" , "Mesa"];
function suma(array)
{

    let resultado= 0

    for(let i=0; i<array.length;i++)
    {
        resultado+=array[i].length;
    }
    return resultado;

}

let palabras1= ["Casa", "Coche", "Ciudad" , "Cesta"]
let palabras2 = ["Barco", "Baca" ,"Bicicleta", "Balon" , "Bisiesto" , "Brasil"]
let palabras3 = ["Venezuela" , "Veneno" , "Voltaje"];

function parImpar(array)
{
    
    let resultado = 0
    for(let i = 0; i<array.length;i++)
    {
        resultado+=array[i].length;
    }

    if(resultado %2 ===0)
    {
        return "Es par"
    }
    else
    {
        return "Es impar"
    }
}

function reverseArr (n)
{
    let inicio = []
    for(let i= n.length-1; i>=0; i--)
    {
        inicio.push(n[i])
    }
    return inicio
}



