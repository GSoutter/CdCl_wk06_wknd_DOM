

document.addEventListener('DOMContentLoaded', ()=>{
  console.log('javascript Loaded');

  const form = document.querySelector('#animal-form');
  form.addEventListener('submit', formHandler);

  const clearnBtn = document.querySelector('#btn-clear-table');
  clearnBtn.addEventListener('click', clearTable);

});



const testClicker = function() {
  console.log('It has been clicked');
};

const formHandler = function (event) {
  event.preventDefault();
  console.log('form submitted');

  newRow = populateNewRow(event)

  table = document.querySelector('#table-body');

  table.appendChild(newRow);

  event.target.reset();
};


const clearTable = function() {
  event.preventDefault();
  console.log('it workds');
  tableBody = document.querySelector('#table-body');
  tableBody.innerHTML = ''
};

const populateNewRow = function(event) {

  const name = document.createElement('td');
  const subgroup = document.createElement('td');
  const species = document.createElement('td');
  const country = document.createElement('td');
  const risk = document.createElement('td');
  const population = document.createElement('td');

  name.textContent = event.target.name.value;
  subgroup.textContent = event.target.subgroup.value;
  species.textContent = event.target.species.value;
  country.textContent = event.target.country.value;
  risk.textContent = event.target.risk.value;
  population.textContent = event.target.population.value;

  const newRow = document.createElement('tr');
  newRow.classList.add('animal-entry')

  newRow.appendChild(name);
  newRow.appendChild(subgroup);
  newRow.appendChild(species);
  newRow.appendChild(country);
  newRow.appendChild(risk);
  newRow.appendChild(population);

  return newRow;

}
