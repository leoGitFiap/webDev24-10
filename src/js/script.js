// CRIANDO A FUNCTION VALIDAR
function validar(){

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    // IF & ELSE PARA VALIDAÇÃO
    if(usuario == "admin" && senha == "12345"){
        alert(`Seja bem vindo, ${usuario}!!!`)
        window.open("dashboard.html")
    }
    else{
        alert("Usuário/Senha inválidos.")
    }

}

function inserir(){

    let numero = document.getElementById('posicao').value -1;
    let novo = document.getElementById('novo').value;
    document.getElementsByClassName('time')[numero].innerHTML = novo;

}