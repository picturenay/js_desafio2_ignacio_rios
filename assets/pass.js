//Verificacion password

document.getElementById('botonPass').addEventListener('click', function() {
    let pass1 = Number(document.getElementById('numero1').value) || 0;
    let pass2 = Number(document.getElementById('numero2').value) || 0;
    let pass3 = Number(document.getElementById('numero3').value) || 0;

let mensajePass = document.getElementById('mensajePass').getElementsByTagName('h1')[0];

    if(pass1 === 9 && pass2 === 1 && pass3 === 1){
        console.log("Password correcto");
        mensajePass.textContent = 'Password 1 Correcto';
    } else if(pass1 === 7 && pass2 === 1 && pass3 === 4){
        console.log("Password 2 correcto");
        mensajePass.textContent = "Password 2 correcto";
    }else{
        console.log("Password incorrecto");
        mensajePass.textContent = "Password incorrecto";
    }

});
