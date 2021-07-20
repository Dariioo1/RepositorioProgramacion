function par(array)
{
    let siHay=true;
    let i =0
    while(i<array.length)
    {
        if(array[i]%2 ==0 && (siHay == true))
        {
            console.log("Tienes un numero par en el array de numeros");
            siHay=false;
        }
        i++
    }

}

function empiezaM (nombre)
{
    
    let letra = true;
    let i=0;

    while(i < nombre.length && letra ===true)
    {
        if(nombre[i].charAt(0) === "M")
        {
            letra = true;
            i++
        }
        else
        {
            letra = false

        }
    }
    return letra
}

