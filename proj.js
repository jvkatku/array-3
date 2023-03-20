let res = document.getElementById('res')

let pais = ['chile','brasil','argentina','bolivia','venezuela']
let cidades = new Array("tijucas","itajai","são josé")

console.log(pais[2])
pais.pop
pais.shift()
console.log(pais)
console.log(cidades)

function inserir(){

    pais.pop()
    pais.shift()
    res.innerHTML += pais + '<br>'
    res.innerHTML += cidades + '<br>'
}