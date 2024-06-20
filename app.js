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

function multiplicar(factor1, factor2) {
    return new Promise((resolve, reject) => {
        if (factor1 === 0 || factor2 === 0) {
            reject("no se puede dividir por 0");
        }else {
            resolve(factor1*factor2);
        }
    });
}

function division(dividendo, divisor) {
    return new Promise((resolve, reject) => {
        if ( divisor === 0) {
            reject("solo se aceptan numeros positivos");
        }else {
            resolve(dividendo/divisor);
        }
    });
}

// funcion async 

async function calcular() {
    try {
        const resultadoSumar = await suma(10,5)
        console.log('la suma dio ',resultadoSumar) 
        const resultadoRestar = await resta(10,5)
        console.log('la resta dio ',resultadoRestar) 
        const resultadoMultiplicar = await multiplicar(10,5)
        console.log('la multiplicacion dio ',resultadoMultiplicar) 
        const resultadoDividir= await division(10,5)
        console.log('la division dio ', resultadoDividir) 

        
    } catch (error) {
        console.log(error);
    }
  } 

  calcular()