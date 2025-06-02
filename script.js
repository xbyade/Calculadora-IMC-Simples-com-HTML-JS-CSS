function imc (){
    let nome = document.querySelector("#name").value.trim();
    nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
    let peso = parseFloat(document.querySelector("#peso").value.trim());
    let altura = parseFloat(document.querySelector("#alt").value.trim());
    let resultado = document.querySelector("#res");

    if(nome === "" || isNaN(peso) || isNaN(altura)){
        resultado.innerHTML = "Favor preencher todos os campos";
        return;
    }
    let valorIMC = peso / (altura * altura);
    let classificacao = "";

    if(valorIMC < 18.5){
        classificacao = "Abaixo do peso";
    }else if(valorIMC < 25 ){
        classificacao = "Com peso normal";
    }else if(valorIMC < 30){
        classificacao = "Com sobrepeso";
    }else if(valorIMC < 35){
        classificacao = "Com obesidade grau I";
    }else if(valorIMC < 40){
        classificacao = "Com obesidade grau II";
    }else{
        classificacao = "Com obesidade grau III";
    }
    resultado.innerHTML = `${nome} Seu IMC é ${valorIMC.toFixed(2)} E você esta ${classificacao}`;
}

let botao = document.querySelector("#but").addEventListener("click",imc);
