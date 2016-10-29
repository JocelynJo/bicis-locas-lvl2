function validateForm(){
	
    // validar nombre
    var name=document.getElementById('name').value;
    if(name.length==0){
    	var bloque = document.createElement("span");
    	var alerta = document.createTextNode("Debe Ingresar su nombre")
    	var contenedor = document.getElementsByClass("name-container");
    	bloque.appendChild(alerta);
    	contenedor.appendChild(bloque);
    	/*function crearNodoHijo(nodoPadre) {
var nodoHijo = document.createElement("div");
var nodoTexto = document.createTextNode("Soy el nodo hijo "+contador);
nodoHijo.appendChild(nodoTexto);
nodoPadre.appendChild(nodoHijo);
contador = contador +1;
}*/

        
        //return false;
    }
   
  
    // validar apellido
    var lastName=document.getElementById('lastname').value;
    if(lastName.length==0){

        alert("Debe ingresar su Apellido");
        return false;
    }
    
    validarLetras(name);
    validarMayus(name);
    validarLetras(lastName);
    validarMayus(lastName);
    validarPass();
    validarMail();
    validarLista();
  
}
function validarMayus(nombre){
        if(nombre.substring(0,1)==nombre.substring(0,1).toUpperCase()){
            return true;
        }else{
            alert("Debe comenzar con Mayuscula");
            return false;
        }
}
function validarLetras(nombre){
        var filter6=/^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
        if (filter6.test(nombre)){
            return true;
        }else{
         alert("Debe Ingresar solo letras");
        } 
}
function validarMail(){
    var mail = document.getElementById("input-email").value;

    if(mail.length==0){
        alert("Debe ingresar su mail");
        return false;
    }

    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(mail)) ) {
        return false;

    }

}

function validarPass(){
     var pass=document.getElementById('input-password').value;
    //campo obligatorio
    if(pass.length==0){
        alert("Falta Ingresar Password");
    }
    // condicio que password sea distinto a 123456 098754
    if(pass!="123456" && pass!="098754"){

        if(pass.length>=6){
            return true;
        }else{
            alert("Su contraseña debe tener al menos 6 caracteres");
        }
    }else{
        alert("Su contraseña no puede ser ni 123456 ni 098754");
    }

}
function validarLista(){
    var opcion = document.querySelector("select").selectedIndex;
    if(opcion == "0" || opcion==null) {
        alert("Elija una opcion de la lista");
    }
}

