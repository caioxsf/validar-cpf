function validarCPF (cpf) {

    let cpfLimpo = cpf.replace(/\D/g, "");
    let cpfNoveDigitos = cpfLimpo.match(/^\d{9}/)[0];
    let cpfArray = cpfNoveDigitos.split('');
    let multiplicacao = 10;
    let somaCPF = 0;

    for(let i=0 ; i<cpfNoveDigitos.length ; i++) {
       somaCPF += cpfArray[i] * multiplicacao;
       multiplicacao--;
    }

    let primeiroDigito = 0;
    let restoDivisaoTotalPrimerioDigito = somaCPF % 11;

    if (restoDivisaoTotalPrimerioDigito >= 2)
        primeiroDigito = 11 - restoDivisaoTotalPrimerioDigito;

    cpfArray.push(primeiroDigito)

    multiplicacao = 11;
    somaCPF = 0;

    for(let i=0 ; i<cpfArray.length ; i++) {
        somaCPF += cpfArray[i] * multiplicacao;
        multiplicacao--;
    }

    let segundoDigito = 0;
    let restoDivisaoTotalSegundoDigito = somaCPF % 11;
 
    if(restoDivisaoTotalSegundoDigito >= 2)
        segundoDigito += 11 - restoDivisaoTotalSegundoDigito;

    cpfArray.push(segundoDigito);

    
    let cpfLimpoComparar = cpf.replace(/\D/g, "");
    let cpfCompararArray = cpfLimpoComparar.split('');


    if(cpfArray[9] == cpfCompararArray[9] && cpfArray[10] == cpfCompararArray[10])
        return true

    return false
}
