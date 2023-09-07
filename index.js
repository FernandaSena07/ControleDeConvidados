class User {
  constructor(nome, telefone, email){
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
  }
}

const listaUser = [];
const lista = document.getElementById('lista');


function cadastrar() {
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;

  if (nome && telefone && email) {
      const user = new User(nome, telefone, email);
      listaUser.push(user);
      exibirLista();
      limparCampos();
      
  }
}

function exibirLista() { 
  lista.innerHTML = '';
  listaUser.forEach((user, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${user.nome} (${user.telefone}) (${user.email}) <button onclick="editar(${index})">Editar</button> <button onclick="excluir(${index})">Excluir</button>`;
        lista.appendChild(li);

        // Adicione um HR após cada item da lista (exceto após o último)
        if (index < listaUser.length - 1) {
            lista.appendChild(document.createElement('hr'));
        }
    });
}


function editar(index) {
  const user = listaUser[index];
  const novoTelefone = prompt('Novo telefone:', user.telefone);
  const novoEmail = prompt('Novo email:', user.email);

  if (novoTelefone !== null && novoEmail !== null) {
      user.telefone = novoTelefone;
      user.email = novoEmail;
      exibirLista();
  }
}

function excluir(index) {
  if (confirm('Tem certeza que deseja excluir este registro?')) {
      listaUser.splice(index, 1);
      exibirLista();
  }
}

function limparCampos() {
  document.getElementById('nome').value = '';
  document.getElementById('telefone').value = '';
  document.getElementById('email').value = '';
}

exibirLista();

