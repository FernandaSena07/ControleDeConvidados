// Definição da classe User para representar um usuário
class User {
  constructor(nome, telefone, email){
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.dataCadastro = new Date(); // Adiciona a data e hora atual do cadastro
  }
}

const listaUser = [];// Array para armazenar os usuários cadastrados
const listaElement = document.getElementById('lista');// Elemento HTML onde a lista de usuários será exibida

// Função para cadastrar um novo usuário
function cadastrar() {
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;

  // Verifica se todos os campos foram preenchidos
  if (nome && telefone && email) {
      const user = new User(nome, telefone, email);
      listaUser.push(user);
      exibirLista();// Atualiza a lista de usuários na página
      limparCampos(); // Limpa os campos de entrada após o cadastro
  }
}

// Função para exibir a lista de usuários na página
function exibirLista() {
  listaElement.innerHTML = ''; // Limpa a lista existente

  listaUser.forEach((user, index) => {
      const tr = document.createElement('tr'); // Cria uma nova linha na tabela

      // Coluna de numeração
      const tdNumero = document.createElement('td');
      tdNumero.textContent = index + 1;

      // Coluna de nome
      const tdNome = document.createElement('td');
      tdNome.textContent = user.nome;

      // Coluna de telefone
      const tdTelefone = document.createElement('td');
      tdTelefone.textContent = user.telefone;

      // Coluna de email
      const tdEmail = document.createElement('td');
      tdEmail.textContent = user.email;

      // Coluna de data de cadastro
      const tdDataCadastro = document.createElement('td');
      const dataCadastro = new Date(user.dataCadastro);
      tdDataCadastro.textContent = dataCadastro.toLocaleString(); // Formata a data e hora

      // Coluna de ações
      const tdAcoes = document.createElement('td');
      const editarButton = document.createElement('button');
      editarButton.textContent = 'Editar';
      editarButton.addEventListener('click', () => editar(index));

      const excluirButton = document.createElement('button');
      excluirButton.textContent = 'Excluir';
      excluirButton.addEventListener('click', () => excluir(index));

      tdAcoes.appendChild(editarButton);
      tdAcoes.appendChild(excluirButton);

      // Adiciona as colunas à linha da tabela
      tr.appendChild(tdNumero);
      tr.appendChild(tdNome);
      tr.appendChild(tdTelefone);
      tr.appendChild(tdEmail);
      tr.appendChild(tdDataCadastro); 
      tr.appendChild(tdAcoes);
      // Adiciona a linha à lista de usuários
      listaElement.appendChild(tr);
  });
}

// Função para editar os dados de um usuário
function editar(index) {
  const user = listaUser[index];
  const novoTelefone = prompt('Novo telefone:', user.telefone);
  const novoEmail = prompt('Novo email:', user.email);

  // Atualiza os dados do usuário se as informações forem fornecidas
  if (novoTelefone !== null && novoEmail !== null) {
    user.telefone = novoTelefone;
    user.email = novoEmail;
    exibirLista(); // Atualiza a lista de usuários após a edição
  }
}

// Função para excluir um usuário
function excluir(index) {
  if (confirm('Tem certeza que deseja excluir este registro?')) {
      listaUser.splice(index, 1); // Remove o usuário da lista
      exibirLista(); // Atualiza a lista de usuários após a exclusão
  }
}

// Função para limpar os campos de entrada após o cadastro
function limparCampos() {
  document.getElementById('nome').value = '';
  document.getElementById('telefone').value = '';
  document.getElementById('email').value = '';
}

exibirLista(); // Exibe a lista de usuários na inicialização da página