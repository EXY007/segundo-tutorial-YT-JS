var correo = prompt("ingrese su correo \n"+
                    "electronico")
var contra = prompt("ingrese su contraseña")  

do {
    var control = 1
    if (contra == "MiContra#$%") {

        alert( "acceso concedido")
        control=0

        
    } else {
        contra = prompt("contraseña incorrecta \n"+
            "intente de nuevo"
        )
        
    }
    
} while (control != 0);

alert("ESTAS DENTRO " + correo)