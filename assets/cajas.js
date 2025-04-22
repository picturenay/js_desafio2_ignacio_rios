//Verificacion stiker

document.getElementById('botonVer').addEventListener('click', function() {
    let valor1 = Number(document.getElementById('cantidad1').value) || 0;
    let valor2 = Number(document.getElementById('cantidad2').value) || 0;
    let valor3 = Number(document.getElementById('cantidad3').value) || 0;

let mensaje = document.getElementById('mensajeVer').getElementsByTagName('h1')[0];

    if(suma<=10){
        console.log("10 o menos");
        mensaje.textContent = `Llevas ${suma} stikers`;
    } else{
        console.log("Llevas demasiados Stikers)");
        mensaje.textContent = "Llevas demasiados stikers";
    }

});

