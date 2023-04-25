const btn_encriptar = document.querySelector(".btn_encriptar");
const btn_desencriptar = document.querySelector(".btn_desencriptar");               //seleccionando el DOOM
const txt_encriptado = document.querySelector(".encriptado")


btn_encriptar.addEventListener('click', function(){// se le asigna el vento click al boton
    const textarea = document.querySelector("textarea").value;//traemos el value del textarea
    txt_encriptado.classList.add('txt_encriptado');//clase para dar estilo donde aparece el texto encriptado
    txt_encriptado.textContent = encriptar();//imprimir en txt_encriptado el retorno de la funcion llamada
    //funcion para encriptar
    function encriptar(){
        let rpl_1 = textarea.replace(/e/g, "enter")
        let rpl_2 = rpl_1.replace(/i/g, "imes")
        let rpl_3 = rpl_2.replace(/a/g, "ai")        //remplazar letra por letra el texto que devuelve cada replace
        let rpl_4 = rpl_3.replace(/o/g, "ober")
        let rpl_5 = rpl_4.replace(/u/g, "ufat")
        return rpl_5;
    }
})
btn_desencriptar.addEventListener('click', function(){// se le asigna el vento click al boton
    const textarea = document.querySelector("textarea").value;//traemos el value del textarea
    txt_encriptado.classList.add('txt_encriptado');//clase para dar estilo donde aparece el texto encriptado
    txt_encriptado.textContent = encriptar();//imprimir en txt_encriptado el retorno de la funcion llamada
    //funcion para encriptar
    function encriptar(){
        let rpl_1 = textarea.replace(/enter/g, "e")
        let rpl_2 = rpl_1.replace(/imes/g, "i")
        let rpl_3 = rpl_2.replace(/ai/g, "a")        //remplazar encriptado por encriptado el texto que devuelve cada replace
        let rpl_4 = rpl_3.replace(/ober/g, "o")
        let rpl_5 = rpl_4.replace(/ufat/g, "u")
        return rpl_5;
    }
})
// ----------------Funcion Anterior----------------
// const textarea = document.querySelector("textarea").value.split("");// comvierte lo que hay en el textarea en array
// textarea.forEach(function(e, i){//iteramos sobre el array mencionado anteriormente
//     encriptar(i);
// })
// txt_encriptado.classList.add('txt_encriptado');
// txt_encriptado.textContent = textarea.join("");
// function encriptar(i){    //funcion para encriptar
// switch (textarea[i]) { 
//     case 'a':
//         textarea[i] = "ai";
//         break;
//     case 'e':
//         textarea[i] = "enter";
//         break;  
//     case 'i':
//         textarea[i] = "imes";
//         break; 
//     case 'o':
//         textarea[i] = "ober";
//         break;
//     case 'u':
//         textarea[i] = "ufat";  
//         break;
//     default:
//         break;
//     }
// }