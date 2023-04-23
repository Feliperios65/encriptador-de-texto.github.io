const textarea = document.querySelector("textarea");
const btn_encriptar = document.querySelector(".btn_encriptar");
const btn_desencriptar = document.querySelector(".btn_desencriptar");

// comvierte lo que hay en el textarea en array
let mensaje = textarea.value.split("")

// se le asigna el vento click al boton para que itere el array
btn_encriptar.addEventListener('click', function(){
    for (let i = 0; i < mensaje.length; i++) {  
           encriptar(i);
    }
    console.log(mensaje.join(""));
})

//funcion para encriptar
function encriptar(i){
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
