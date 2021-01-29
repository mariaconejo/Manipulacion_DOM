/**
 * Ejercicio #4:
 *
 * Validar el formulario
 *
 * ¿Como funciona?:
 * 1. La validacion se hace cuando el usuario presiona el boton "Enviar" para enviar el forom
 * 2. Solo se validan los campos con el * (tienen la clase requerido)
 * 3. Al hacer click en "enviar"
 *     3.1. Los campos invalidos deben ponerse con un borde rojo
 *     3.2. Se debe mostrar un aviso con un titulo de: "Ocurrio un error, verifica
 *     los siguientes campos" y seguido un listado con los campos invalidos. El aviso
 *     debe tener border rojo y fondo rojo claro
 *     3.3. Si todos los camppos son validos, debe mostrar un mensaje abajo del boton enviar
 *     que dice: "Su formulario fue enviado". El aviso debe tener borde verde con fondo verde claro
 *
 * ¿Donde empiezo?:
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas (incluyendo buenas practicas pasadas)
 *
 */

// BOILERPLATE
const form = document.querySelector("form");
const input = document.querySelectorAll('.requerido');
const form_parent = form.parentElement;
const title_warning = document.createElement('h2');
const title_check = document.createElement('h3');
const script = document.querySelector('script');
let alert_error = '';
let alert_valido = '';

form.addEventListener("submit", function(e) {
  e.preventDefault();
  input.forEach(element =>{
    if(element.value === ''){
      element.style.border = 'solid 1px red';
      alert_error = 'Ocurrio un error';
      alert_valido = "";
      
    }else{
      element.style.border = 'solid 1px black';
      alert_error = '';
      alert_valido = "Su formulario fue enviado";
      
    }
  });
  title_check.innerText = alert_valido;
  title_warning.innerText = alert_error;
  form_parent.insertBefore(title_check, script);
  title_check.style.backgroundColor = "rgb(171, 235, 198 )";
  form_parent.insertBefore(title_warning, form);
  title_warning.style.backgroundColor = "rgb(245, 183, 177 )";

  console.log("FORMULARIO ENVIADO");
});
