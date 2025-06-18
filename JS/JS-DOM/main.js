//window.alert(" Digite um número de 1 até 10")


// (nome da finçãp, tempo para chama a função)

// window.setTimeout(mensagem, 2000)

// 2s > 2000

// FUNCTION > ação que o codigo pode executar quando for solicitado peço usuario no navegador 

 function mensagem(){}
     alert('Apredendo DOM com JS')
    alert(Date())

//alert("Aprendendo DOM com JS")



let tagH1 = document.createElement("h1")
// inner html > para adicionar uma informação dentro das tags do html

tagH1.innerHTML = 'Olá Mundo, Criei Você'
// A quem ela vai pertencer 
document.body.appendChild(tagH1)

