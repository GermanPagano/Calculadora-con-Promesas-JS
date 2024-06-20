function suma(a, b) {
    return new Promise((resolve, reject) => {
        if (a === 0 || b === 0) {
            reject("operacion innecesaria");
        } else if ( a + b < 0){
            reject("solo se aceptan numeros positivos");
        }
        else {
            resolve(a+b);
        }
    });
}


// Ejemplo de uso:
suma(20, 5)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });