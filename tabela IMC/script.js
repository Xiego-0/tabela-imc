let linhas = document.querySelectorAll("tbody tr");

for(let i = 0; i < linhas.length; i++){
    let linha = linhas[i];
    
    let altura = Number(linha.children[2].textContent);
    let peso = Number(linha.children[3].textContent);

    let imc = peso / (altura * altura);

    let classificacao = "";

    if(imc < 18.5){
        classificacao = "Abaixo do peso";
    }
    else if(imc < 25){
        classificacao = "Peso normal";
    }
    else if(imc < 30){
        classificacao = "Sobrepeso";
    }
    else if(imc < 35){
        classificacao = "Obesidade Grau I";
    }
    else if(imc < 40){
        classificacao = "Obesidade Grau II";
    }
    else{
        classificacao = "Obesidade Grau III (Mórbida)";
    }

    linha.children[4].textContent = imc.toFixed(1);
    linha.children[5].textContent = classificacao;

};
