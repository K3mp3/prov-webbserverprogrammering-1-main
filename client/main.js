import axios from "axios";

const form = document.querySelector(".review-form");
const submitBtn = document.querySelector("button[type='submit']")

const API_URL = "http://localhost:3000";

const checkInputs = () => {
  const exercise = form.elements.bookTitle.value;
  const duration = form.elements.author.value;
  const date = form.elements.reviewer.value;
  const notes = form.elements.rating.value;
  

  if (!exercise || !duration || !date|| !notes) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
};

const displayTraining = (training) => {

  const trainingContainer = document.querySelector(".training-container");
  // Holt das div wo wor die Notizen anzeigen

  trainingContainer.innerHTML = "";

  if (training.lenghth === 0) {
    trainingContainer.innerHTML= `
    <div class="empty-state">
      <h3>Keine Notizen vorhanden</h3>
      <p>Erstelle deine erste Notiz!</p>
      </div>
      `;
      return;
  }
  training.forEach((training) => {

    const trainingDiv = document.createElement("div");

    trainingDiv.className = "training";

    const date = new Date(note.timestamp). toLocaleDateString("sv-SE");

    trainingDiv.innerHTML = `
    <h3>${}</h3>
    <p>${}</p>
    <div class="training-meta">
      <span class="training-date">${date}</span>
      </div>
      `;
    
    trainingContainer.appendChild(trainingDiv);
  });
};

form.addEventListener("input", checkInputs);


form.addEventListener("submit", async (e) => {
  e.preventDefault();

let exercise = form.elements.bookTitle.value;  //läser in det som skrivs i namn inputfältet
let duration = form.elements.author.value;
let date = form.elements.reviewer.value;
let notes = form.elements.rating.value;


  if (!exercise || !duration || !date|| !notes) {
  alert("Fyll i alla fält!");
  return
}
  
  const trainingData = {
    exercise,
    duration,
    date,
    notes,
  };
  
  try {
    const response = await axios.post(`${API_URL}/save-training`, trainingData);

    if (response.status === 201) {
      alert("Recension erstellt!");
      form.reset();
      loadReviews();
    } else {
      alert("Ein Fehler ist aufgetreten.");
    }
  } catch (error) {
    console.error("Fehler:", error);
    alert("Ein Fehler ist aufgetreten.");
  }
});

window.addEventListener("load", () => {

  loadTraining();

});
