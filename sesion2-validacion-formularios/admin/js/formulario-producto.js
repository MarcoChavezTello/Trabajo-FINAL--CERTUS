const formulario = document.getElementById('formulario-producto');
const inputs = document.querySelectorAll('#formulario-producto input');
const selects = document.querySelectorAll('#formulario-producto select');

const expresiones = {
    inputModelo: /^[0-9]{1,6}$/,
    inputProducto: /^.{4,40}$/,
    inputDetalle: /^.{10,100}$/,
    inputPeso: /^[0-9.]{1,6}$/,
    inputMaterial: /^.{1,15}$/,
    inputStock: /^[0-9]{1,6}$/
}

const campos = {
    inputProducto: false,
    inputModelo: false,
    inputProducto: false,
    inputDetalle: false,
    inputPeso: false,
    inputMaterial: false,
    inputStock: false
}

function validarCampo(expresion, input, campo) {
    expresion.test(input.value)
      ? (document.getElementById(`${campo}`).classList.add("is-valid"),
        document.getElementById(`${campo}`).classList.remove("is-invalid"),
        campos[campo] == true)
      : (document.getElementById(`${campo}`).classList.add("is-invalid"),
        document.getElementById(`${campo}`).classList.remove("is-valid"),
        campos[campo] == false);
  }

const validarFormulario = (e) => {
    switch(e.target.name) {
        case "inputProducto":
              validarCampo(expresiones.inputProducto,e.target,'inputProducto');
        break;
        case "inputModelo":
            validarCampo(expresiones.inputModelo,e.target,'inputModelo');
        break;
        case "inputDetalle":
            validarCampo(expresiones.inputDetalle,e.target,'inputDetalle');
        break;
        case "inputPeso":
            validarCampo(expresiones.inputPeso,e.target,'inputPeso');
        break;
        case "inputMaterial":
            validarCampo(expresiones.inputMaterial,e.target,'inputMaterial');
        break;
        case "inputStock":
            validarCampo(expresiones.inputStock,e.target,'inputStock');
        break; 
        case "inputTalla":
            e.target.value !== ""
            ? (document.getElementById("inputTalla").classList.remove("is-invalid"),
              document.getElementById("inputTalla").classList.add("is-valid"))
            : (document.getElementById("inputTalla").classList.remove("is-valid"),
              document.getElementById("inputTalla").classList.add("is-invalid"));
         break;  
         case "inputImagen":
            if(e.target.value !==''){
                document.getElementById('inputImagen').classList.remove('is-invalid');
                document.getElementById('inputImagen').classList.add('is-valid');
             
            } else {
                document.getElementById('inputImagen').classList.remove('is-valid');
                document.getElementById('inputImagen').classList.add('is-invalid');
                
            }
         break; 
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario)
});

selects.forEach((select) => {
    console.log(select);
    select.addEventListener('blur' , validarFormulario);
});