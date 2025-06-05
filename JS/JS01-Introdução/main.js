var idade
//JavaScript
console.log("Hello World") //apresentar uma mensagem
console.clear() //limpar mensagem 

//Variaveis

var numero1 = 192 //inicializar uma variavel
console.log(numero1)

var num1 = 4
var num2 = 5
console.log(num1 + num2)

var resultado = num1 * num2
console.log(resultado)

idade = 89 // inicializar a variavel em outra parte do console
console.log(idade)

//Textos - Strings

var nome = "Lorem"
var nome2 = "Tardis"
var nome3 = "Trenzalore"

console.log(nome)
console.log(nome2)


//VAR // Flexivel e com menos regras (posso alterar o valor inicial de u,a var e recriar a mesma em outras partes do codigo)

//LET // Você não pode recriar a mesma em outras partes do cidugo com o mesmo noem, mas pode chamar e alterar o valro inicial 

//Const // Você não pode recruar a mesma em outaras partes do codigo enão pode alterar o vallor inicial dela garantindo a confiança do dado que está sendo utilizado no decorrer do seu codigo 

console.log("Aluno", "Tardis") // Modo de Concaternar 1

console.log ("Aluno " + nome + " e Aluno " + nome2 + " tem um Total de " + nome3 + " Dinheiro " ) // Modo de Concaternar 1

//Templete String

console.log(`Aluno ${nome} e Aluno ${nome2} tem um total de ${nome3} dinheiro `) // Modo de Concaternar 1

//Operadores
var valor1 = 5
var valor2 = 5

console.log( valor1 * valor2)
console.log( valor1 - valor2)
console.log( valor1 + valor2)
console.log( valor1 / valor2)
console.log( valor1 % valor2)
console.log( valor1 ** valor2)

//Operadores Relacionais

console.log(5 == 5)
console.log(5 === 5)
console.log(5 == "5")
console.log(5 != 5)
console.log(5 < 5)
console.log(5 <= 5)
console.log(5 > 5)
console.log(5 >= 5)
console.log('Miih' <= "Miih")

let temCamisa = false
let temCracha = true
console.log(temCamisa)
console.log(temCamisa)
console.log(temCamisa == true && temCracha == true);
console.log(temCamisa == true || temCamisa == true)