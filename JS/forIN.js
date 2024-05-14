let palabra = "Fernando"


//solo funciona para objetos que contienen una cantidad de elementos
//para valores enteros esta el for normal
for (let f in palabra) {
   
    document.write(f)
    document.write("<br>")
}
document.write("<br>")
//practicamente lo ve y lo trata como un array
//con el mismo escript:
for (let f in palabra) {
   
    document.write(palabra[f])
    document.write("<br>")
}


document.write("<br>")

//ejercicio
let palabra2="murcielago"
var contador = 0
for(let f in palabra2)
    {
        if(palabra2[f]=="a"||palabra2[f]=="e"|| palabra2[f]=="i"|| 
        palabra2[f]=="o"|| palabra2[f]=="u"
         )
        {
         contador++;
        }
    }

    document.write("LA CANTIDAD DE VOCALES ES: "+ contador);
    document.write("<br>")
    document.write("<br>")



    //detener el bucle en la vuelta 3
    for(var i=1; i<=10;i++)
        {
            document.write(i);
            document.write("<br>")

            if(i==3)
                {
                    document.write("aqui es la ultima vuelta numero:"+i);
                    break;
                }

        }

        document.write("<br>")
        document.write("<br>")


        let palabra5 = "luissamedinasara"
        let resultado5 = "";

        for(let k in palabra5 )
            {
                if(palabra5[k]=="a"||palabra5[k]=="z")
                    {
                        continue;
                    }
                    else
                    {
                        resultado5 = resultado5 + palabra5[k];
                        //resultado5+=palabra5[k];
                    }                   
            }
            document.write(resultado5)

