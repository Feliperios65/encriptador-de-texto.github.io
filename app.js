const textarea = document.querySelector("textarea");//seleccionando el DOOM
const btn_encriptar = document.querySelector(".btn_encriptar");
const btn_desencriptar = document.querySelector(".btn_desencriptar");
const txt_encriptado = document.querySelector(".encriptado")


btn_encriptar.addEventListener('click', function(){// se le asigna el vento click al boton para que itere el array
    txt_encriptado.classList.add('txt_encriptado')
    let mensaje = textarea.value.split("")// comvierte lo que hay en el textarea en array
    for (let i = 0; i < mensaje.length; i++) {  
           encriptar(i);
    }
    txt_encriptado.textContent = mensaje.join("");

    function encriptar(i){    //funcion para encriptar
    switch (mensaje[i]) {
        case 'a':
            mensaje[i] = "ai";
            break;
        case 'e':
            mensaje[i] = "enter";
            break;  
        case 'i':
            mensaje[i] = "imes";
            break; 
        case 'o':
            mensaje[i] = "ober";
            break;
        case 'u':
            mensaje[i] = "ufat";  
            break;
        default:
            break;
        }
    }
})

