

document.addEventListener('DOMContentLoaded', ()=>{
  console.log('javascript Loaded');

  const form = document.querySelector('#animal-form');
  form.addEventListener('submit', formHandler);

  const clearnBtn = document.querySelector('#btn-clear-table');
  clearnBtn.addEventListener('click', clearTable);




});


const formHandler = function () {
  event.preventDefault();
  console.log('form submitted');

  const name = document.createElement('td');
  const subgroup = document.createElement('td');
  const species = document.createElement('td');
  const country = document.createElement('td');
  const risk = document.createElement('td');
  const population = document.createElement('td');

  const newRow = document.createElement('tr');

  name.textContent = event.target.name.value;
  subgroup.textContent = event.target.subgroup.value;
  species.textContent = event.target.species.value;
  country.textContent = event.target.country.value;
  risk.textContent = event.target.risk.value;
  population.textContent = event.target.population.value;

  newRow.appendChild(name);
  newRow.appendChild(subgroup);
  newRow.appendChild(species);
  newRow.appendChild(country);
  newRow.appendChild(risk);
  newRow.appendChild(population);

  table = document.querySelector('#animal-table');

  table.appendChild(newRow);

  event.target.reset();
};


const clearTable = function() {
  event.preventDefault();
  console.log('it workds');
  table = document.querySelector('#animal-table');
  table.innerHTML = ""



};
