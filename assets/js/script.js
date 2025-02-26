function validarCPF () {

    let cpf = document.getElementById('cpf').value;

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


    if(cpfArray[9] == cpfCompararArray[9] && cpfArray[10] == cpfCompararArray[10]) {
        document.getElementById('textoValidacaoCPF').innerHTML = "CPF Válido"
        return true 
    } else {
        document.getElementById('textoValidacaoCPF').innerHTML = "CPF Inválido"
        return false
    }

}

function ajustarCPF(cpf) {
    
    let cpfInput = cpf.value.replace(/\D/g, "");
    let cpfNoveDigitos = cpfInput.match(/^\d{11}/)[0];
    let cpfFormatado = cpfNoveDigitos.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    cpf.value = cpfFormatado;
}

ajustarCPF("47182553848")