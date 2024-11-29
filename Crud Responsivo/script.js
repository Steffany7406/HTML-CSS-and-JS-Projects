const modal = document.querySelector('.modal-container');
const tbody = document.querySelector('tbody');
const sNome = document.querySelector('#m-nome');
const sFuncao = document.querySelector('#m-funcao');
const sSalario = document.querySelector('#m-salario');
const btnSalvar = document.querySelector('#btnSalvar');

let itens = []; // Initialize empty array for items
let id; // Variable to store edited item's index

function openModal(edit = false, index = 0) {
  modal.classList.add('active');

  // Close modal when clicking outside (excluding modal content)
  modal.onclick = (e) => {
    if (e.target.className.indexOf('modal-container') !== -1){
      modal.classList.remove('active');
    }
  };

  if (edit) {
    sNome.value = itens[index].nome;
    sFuncao.value = itens[index].funcao;
    sSalario.value = itens[index].salario;
    id = index; // Store edited item's index for update
  } else {
    sNome.value = '';
    sFuncao.value = '';
    sSalario.value = '';
    id = undefined; // Clear id for new item creation
  }
}

function closeModal() {
  modal.classList.remove('active');
}

function editItem(index) {
  openModal(true, index);
}

function deleteItem(index) {
  itens.splice(index, 1); // Remove item from array
  setItensBD(); // Update local storage
  loadItens(); // Refresh table
}

function insertItem(item, index) {
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.funcao}</td>
    <td>${item.salario}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class="fa-solid fa-pen-to-square"></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class="fa-solid fa-trash"></i></button>
    </td>
  `;

  tbody.appendChild(tr);
}

btnSalvar.onclick = (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  if (sNome.value === '' || sFuncao.value === '' || sSalario.value === '') {
    alert('Please fill in all fields!'); // Informative error message
    return;
  }

  if (id !== undefined) { // Update existing item
    itens[id].nome = sNome.value;
    itens[id].funcao = sFuncao.value;
    itens[id].salario = sSalario.value;
  } else { // Add new item
    itens.push({ nome: sNome.value, funcao: sFuncao.value, salario: sSalario.value });
  }

  setItensBD(); // Update local storage with latest data
  loadItens(); // Refresh table
  closeModal(); // Close modal after successful save
  id = undefined; // Clear id for next new item
};

function loadItens() {
  itens = getItensBD(); // Retrieve data from local storage
  tbody.innerHTML = ''; // Clear existing table content

  itens.forEach((item, index) => {
    insertItem(item, index); // Create table rows
  });
}

function getItensBD() {
  return JSON.parse(localStorage.getItem('dbfunc')) || []; // Parse stored data or return empty array
}

function setItensBD() {
  localStorage.setItem('dbfunc', JSON.stringify(itens)); // Update local storage with current items
}

loadItens(); // Load items on page load
