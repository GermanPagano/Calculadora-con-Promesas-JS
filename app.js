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

function resta(a, b) {
    return new Promise((resolve, reject) => {
        if (a === 0 || b === 0) {
            reject("operacion innecesaria");
        } else if ( a - b < 0){
            reject("solo se aceptan numeros positivos");
        }
        else {
            resolve(a-b);
        }
    });
}

function resta(factor1, factor2) {
    return new Promise((resolve, reject) => {
        if (factor1 === 0 || factor2 === 0) {
            reject("operacion innecesaria");
        } else if ( factor1 * factor2 < 0){
            reject("solo se aceptan numeros positivos");
        }
        else {
            resolve(factor1*factor2);
        }
    });
}



