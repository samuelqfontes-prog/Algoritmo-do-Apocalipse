let d = parseInt(prompt('qual o dia da data: '))
let m = parseInt(prompt('qual o  numero do mes da data: '))
let a = parseInt(prompt('qual o ano da data: '))
if (m == 1 || m == 2) {
    m = m + 12
    a = a - 1
}//Na matemática que o criador desse algoritmo usou, janeiro e fevereiro são tratados como se fossem os meses 13 e 14 do ano anterior
let k = d + 2 * m + Math.floor((3 * (m+1)/5)) +a+Math.floor(a/4)-Math.floor(a/100)+Math.floor(a/400)+2 //variavel da formula(k)
let ds = k%7 // dia da semana é o resto da divisao de k por 7
if (ds == 0){
    console.log('foi um sabado')
} 
 else if (ds==1){
    console.log('foi um domingo')
 } 
 else if (ds == 2){
    console.log('foi uma segunda')
 }
 else if (ds == 3){
    console.log('foi uma terça')
 }
 else if (ds == 4){
    console.log('foi uma quarta')

 }
 else if (ds == 5){
    console.log('foi uma quinta')
 }
 else if (ds == 6){
    console.log('foi uma sexta')
 }
