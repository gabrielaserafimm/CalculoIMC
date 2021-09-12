function calcular() {
    let altura                 = parseFloat(document.getElementById('altura').value);
    let peso                   = parseFloat(document.getElementById('peso').value);
    let imc                    = peso/(altura*altura);
    let remove_classificacao   = document.querySelector('span#classificacao').className;
    let add_classificacao      = document.querySelector('span#classificacao');
    let classificacao          = '';
    let class_classificacao;
  
    if ((isNaN(altura)) || (isNaN(peso))) {
        return alert('Altura ou peso inválido');
    }

    if ((altura === 0) || (peso === 0)) {
        return alert('Altura ou peso não podem ser zero.');
    }
    
    if (imc < 16) {
        if (remove_classificacao != '') {
            add_classificacao.classList.remove(remove_classificacao);
        }
        class_classificacao = 'magreza-grave';
        classificacao = 'Magreza Grave';
        add_classificacao.classList.add(class_classificacao);

    } else if (imc >= 16 && imc < 17) {
        if (remove_classificacao != '') {
            add_classificacao.classList.remove(remove_classificacao);
        }
        class_classificacao = 'magreza-moderada';
        classificacao = 'Magreza Moderada';
        add_classificacao.classList.add(class_classificacao);

    } else if (imc >= 17 && imc < 18.5) {
        if (remove_classificacao != '') {
            add_classificacao.classList.remove(remove_classificacao);
        }
        class_classificacao = 'magreza-leve';
        classificacao = 'Magreza Leve';
        add_classificacao.classList.add(class_classificacao);

    } else if (imc >= 18.5 && imc < 25) {
        if (remove_classificacao != '') {
            add_classificacao.classList.remove(remove_classificacao);
        }
        class_classificacao = 'saudavel';
        classificacao = 'Saudável';
        add_classificacao.classList.add(class_classificacao);

    } else if (imc >= 25 && imc < 30) {
        if (remove_classificacao != '') {
            add_classificacao.classList.remove(remove_classificacao);
        }
        class_classificacao = 'sobrepeso';
        classificacao = 'Sobrepeso';
        add_classificacao.classList.add(class_classificacao);

    } else if (imc >= 30 && imc < 35) {
        if (remove_classificacao != '') {
            add_classificacao.classList.remove(remove_classificacao);
        }
        class_classificacao = 'obesidade-grau-1';
        classificacao = 'Obesidade Grau I';
        add_classificacao.classList.add(class_classificacao);

    } else if (imc >= 35 && imc < 40) {
        if (remove_classificacao != '') {
            add_classificacao.classList.remove(remove_classificacao);
        }
        class_classificacao = 'obesidade-grau-2';
        classificacao = 'Obesidade Grau II (severa)';
        add_classificacao.classList.add(class_classificacao);

    } else if (imc >= 40) {
        if (remove_classificacao != '') {
            add_classificacao.classList.remove(remove_classificacao);
        }
        class_classificacao = 'obesidade-grau-3';
        classificacao = 'Obesidade Grau III (mórbida)';
        add_classificacao.classList.add(class_classificacao);
    }

    document.getElementById('imc').innerHTML = imc.toFixed(2);
    document.querySelector('#classificacao').innerHTML = classificacao;
}


function limpar() {
    let altura = document.getElementById('altura').value = '';
    let peso = document.getElementById('peso').value = '';
    document.getElementById('imc').innerHTML = ''
    document.getElementById('classificacao').innerHTML = ''
}