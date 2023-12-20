const form = document.querySelector("form"); // to select the form 
const Submitted_Email = document.querySelector("#submitted_email");

const signUp = document.querySelector("#signUp");
const success = document.querySelector("#Success");
const Dismiss = document.querySelector("#dismiss");

function switchSections(){
  signUp.classList.toggle("hidden");
  success.classList.toggle("hidden");
}

function updateSuccessMessage(email){
  Submitted_Email.textContent = email;
}

form.addEventListener("submit" , (e) => {
  e.preventDefault();                       // line 2 - 4 prevents the page from refreshing when clicked
  const email = form.querySelector("#email");
  console.log(updateSuccessMessage(email.value));

  switchSections();
})

Dismiss.addEventListener('click' , () => {
  switchSections();
  updateSuccessMessage();
})