const emptyDiv = document.getElementById("people-list");
const input = document.getElementById("input");
const btn = document.getElementById("btn");

btn.onclick = () => {
    if(input.value.trim()){
        fetch("https://jsonplaceholder.typicode.com/users/name" + input.value)
        .then((res) => res.json)
        .then((people) => {
            renderCard(people)
        })
    }
}

function renderCard(array = []) {
  emptyDiv.innerHTML = "";
  if (array.length === 0) {
    emptyDiv.innerHTML = `
        <div class="spinner-border" role="status">
    <span id="spinner-border" class="visually-hidden">Loading...</span>
</div>
        `;
  }
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    emptyDiv.innerHTML += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${array[i]?.name}</h5>
    <p class="card-text">Email:<strong> ${array[i]?.email}</strong></p>
    <p class="card-text">Phone:<strong> ${array[i]?.phone}</strong></p>
    <p class="card-text">Company:<strong> ${array[i]?.company?.name}</strong></p>
    <p class="card-text">Website:<strong> ${array[i]?.website}</strong></p>
    
  </div>
</div>
    `;
  }
}
renderCard();
function getPeople(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((peopleData) => {
        console.log(peopleData);
        renderCard(peopleData);
    });
} 
getPeople();
