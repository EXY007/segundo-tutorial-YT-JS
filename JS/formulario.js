let control=0, contraseña = "exy007";

function verificar(){
    let clave = document.getElementById("clave").value;

    if (clave.toLowerCase() != contraseña || clave == "")
        {
            alert("CLAVE INCORRECTA o vacia, INTENTE DE NUEVO");
        control++;

        if(control>=3)
            {
                alert("intentos agotados");
                    
            }
        } 
        else 
        {
            window.open("http://www.google.com")

        }



}