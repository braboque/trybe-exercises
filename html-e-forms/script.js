let estados = ['Ceará', 'Bahia', 'Maranhão', 'Minas Gerais', 'Rio de Janeiro', 'São Paulo', 'Pernambuco'];
let optionsElements = document.getElementById('input-estados');

//  Função adiciona estados no select(input-estados)
function selectEstado(){
    
    for(let index = 0; index < estados.length; index += 1){
        let addOpcao = document.createElement('option');
        addOpcao.value = estados[index];
        addOpcao.innerText = estados[index];// O que irá aparecer para o usuário
        optionsElements.appendChild(addOpcao);
    };
};

selectEstado();