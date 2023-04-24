const btn_encriptar = document.querySelector(".btn_encriptar");//seleccionando el DOOM
const btn_desencriptar = document.querySelector(".btn_desencriptar");
const txt_encriptado = document.querySelector(".encriptado")


btn_encriptar.addEventListener('click', function(){// se le asigna el vento click al boton para que itere el array
    txt_encriptado.classList.add('txt_encriptado')
    const textarea = document.querySelector("textarea").value.split("");// comvierte lo que hay en el textarea en array
    for (let i = 0; i < textarea.length; i++) {  
           encriptar(i);
    }
    txt_encriptado.textContent = textarea.join("");

    function encriptar(i){    //funcion para encriptar
    switch (textarea[i]) {
        case 'a':
            textarea[i] = "ai";
            break;
        case 'e':
            textarea[i] = "enter";
            break;  
        case 'i':
            textarea[i] = "imes";
            break; 
        case 'o':
            textarea[i] = "ober";
            break;
        case 'u':
            textarea[i] = "ufat";  
            break;
        default:
            break;
        }
    }
})

