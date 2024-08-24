// a lista deve estar vazia para colocar elementos dentro dela 
let amigos=[];
function adicionar(){
    // recuperar o elemento do html
    let amigo=document.getElementById('nome-amigo');
    // comando para nao deixar adicionar vazio no codigo 
    if (amigo.value== ''){
        alert('Informe o nome do amigo');
        // comando para retornar no codigo 
        return; 
    }
    // comando para que o nome nao repeti novamente 
    if(amigos.includes (amigo.value)){
        alert('O nome ja existe ')
        return;
    }
    let lista=document.getElementById('lista-amigos');
    // aqui nesta parte podemos adicionar elementos na lista 
    amigos.push(amigo.value);
    // codigo para adicionar nomes dentro de uma lista deve ser feito desta forma atencao nos espacos por que isso importa 
    if (lista.textContent== ''){
        lista.textContent=amigo.value;
    }else {
        lista.textContent=lista.textContent + ', ' + amigo.value; 
    }
    amigo.value= '';
}
function sortear(){
    // comando para ler quantos elementos existe dentro do sistema 
    if (amigos.length<4){
        alert('Adicione ao menos 4 integrantes');
        return;
    }
    embaralha(amigos)
    // recuperar o elemento que esta no html
    let sorteio=document.getElementById('lista-sorteio');
    // condicao do loop para adicionar 
    for (let i=0; i<amigos.length; i++){
        // este comando -1 devido que ele le tudo a partir do 0 logo onde a 10 nomes o 0 conta entao vai ter 9 elementos por isso -1 para fecha 10
        if (i == amigos.length-1){
            // comando para entra no html com o indice no inicio ou seja 0
            sorteio.innerHTML= sorteio.innerHTML + amigos[i]+ '-->' + amigos[0] + '<br>'
        }else{
            // comando para entra no html com o indice no inicio ou seja +1 
            sorteio.innerHTML= sorteio.innerHTML + amigos[i]+ '-->' + amigos[i+1] + '<br>'
        }  
    }
}
// comando para embralhar os nomes 
function embaralha(lista){
    for(let indice=lista.length; indice; indice--){
        const indiceAleatorio=Math.floor(Math.random()* indice);
        [lista[indice-1],lista[indiceAleatorio]]=[lista[indiceAleatorio],lista[indice-1]];
    }
}   
// funcao criada no html para reiniciar 
function reiniciar(){
    // nao deve pegar o nome let por que ja esta criada 
    amigos=[];
    // desta forma que esta vai ficar vaiza cada atributo ou seja nota que elas esta com '' ja que ela esta atribuindo 
    lista=document.getElementById('lista-amigos').innerHTML= ''; 
    sorteio=document.getElementById('lista-sorteio').innerHTML= '';
}

