//declarar unas variables, para capturar lo que se encuentra en los id
const formcontact = document.querySelector('#formcontact');
const recepcion = document.querySelector('#recepcion');

//crear un evento de escucha para el submit o envio de correo
//crear una funcion con el nombre de enviarInfo, para ejecutar el envio de correo
formcontact.addEventListener('submit',enviarInfo);

function enviarInfo(event){
    //crear un evento de presionar el boton envio
    event.preventDefault();
    //vamos a capturar lo que hay en los elementos del formulario
    const envioForm = new FormData(this);
    //recepcion de los datos
    recepcion.setAttribute('href',`mailto:${envioForm.get('email')}?subject=nombre: ${envioForm.get('nombre')} apellido: ${envioForm.get('apellido')} email: ${envioForm.get('email')}&body=${envioForm.get('mensaje')}`);
    recepcion.click();

}
