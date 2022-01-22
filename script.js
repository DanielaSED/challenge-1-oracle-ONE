//Declaración de variables

var texto = document.querySelector("#text-input")

var bEn = document.querySelector("#button-en");

var bDes = document.querySelector("#button-des");

var bCopy = document.querySelector("#button-copy");

//Asociación de variables con botones HTML

bEn.addEventListener("click",function(event){
    event.preventDefault();
    var texto = capture()
     encrypt(texto);
 });

bDes.addEventListener("click",function(event){
    event.preventDefault();
    var texto = capture()
    decrypt(texto);
});

bCopy.addEventListener("click",function(event){
    event.preventDefault();
    copy();
});

//Funciones

function capture(){
    var text = document.querySelector("#text-input");
    return text.value
}  

function encrypt(x){
    var restrict = /^[a-z ]+$/;
    if(!restrict.test(x)){
        alert("No se permiten números, mayúsculas, letras con acentos, ni caracteres especiales en el texto a encriptar o desencriptar.");
    }
    else{
        x = x.replaceAll("e","enter");
        x = x.replaceAll("i","imes");
        x = x.replaceAll("a","ai");
        x = x.replaceAll("o","ober");
        x = x.replaceAll("u","ufat");
        document.querySelector("#text-output").value = x
        return x
    }
}

function decrypt(x){
    var restrict = /^[a-z ]+$/;
    if(!restrict.test(x)){
        alert("No se permiten números, mayúsculas, letras con acentos, ni caracteres especiales en el texto a encriptar o desencriptar.");
    }
    else{
        x = x.replaceAll("enter","e");
        x = x.replaceAll("imes","i");
        x = x.replaceAll("ai","a");
        x = x.replaceAll("ober","o");
        x = x.replaceAll("ufat","u");
        document.querySelector("#text-output").value = x
        return x
    }
} 

function copy(){
    var text = document.querySelector("#text-output");
    text.select();
    text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(text.value);
}

/*Reglas de encriptación y desencriptación: 
"e" <-> "enter" 
"i" <-> "imes"
"a" <-> "ai"
"o" <-> "ober"
"u" <-> "ufat"
Solo letras minúsculas, y no se permite acentuaciones*/