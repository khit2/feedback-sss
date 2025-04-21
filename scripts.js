

let currentStep = 1;

function nextStep(step) {
  const errorElement = document.getElementById("error-message");

  if (step === 2 && !isFeedbackSelected()) {
    errorElement.innerHTML = "Please select an emoji before proceeding.";
    errorElement.style.color = "red";
  } else if (step === 3 && !isServantSelected()) {
    errorElement.innerHTML = "Please select before proceeding.";
    errorElement.style.color = "red";
  } else {
    errorElement.innerHTML = ""; // Clear any previous error messages
    // Hide the current step
    document.getElementById(`step${currentStep}`).style.display = "none";

    // Show the next step
    document.getElementById(`step${step}`).style.display = "flex";

    // Update the current step
    currentStep = step;
  }
}

function prevStep(step) {
  // Hide the current step
  document.getElementById(`step${currentStep}`).style.display = "none";

  // Show the previous step
  document.getElementById(`step${step}`).style.display = "flex";

  // Update the current step
  currentStep = step;

  // Clear any previous error messages
  document.getElementById("error-message").innerHTML = "";
}

function isFeedbackSelected() {
  const feedbackRadios = document.getElementsByName("feedback");
  for (const radio of feedbackRadios) {
    if (radio.checked) {
      return true;
    }
  }
  return false;
}

function isServantSelected() {
  const servantRadios = document.getElementsByName("servant");
  for (const radio of servantRadios) {
    if (radio.checked) {
      return true;
    }
  }
  return false;
}

    // Function to open the modal
    function openModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
      window.location.reload();
    }

function submitForm() {
 
 // Get selected feedback
  const feedbackRadios = document.getElementsByName("feedback");
  let feedbackValue = "";
  for (const radio of feedbackRadios) {
    if (radio.checked) {
      feedbackValue = radio.value;
      break;
    }
  }

  // Get selected servant
  const servantRadios = document.getElementsByName("servant");
  let servantValue = "";
  for (const radio of servantRadios) {
    if (radio.checked) {
      servantValue = radio.value;
      break;
    }
  }

  // Get input values
  const nameValue = document.getElementById("Name").value;
  const commentsValue = document.getElementById("Comments").value;
  const addressValue = document.getElementById("Address").value;
  const ssnoValue = document.getElementById("Ssno").value;
  const CpnoValue = document.getElementById("cpno").value;
  const ReasonValue = document.getElementById("reason1").value;
  const Reason1Value = document.getElementById("reason2").value;
  const Reason2Value = document.getElementById("reason3").value;
  const Reason3Value = document.getElementById("reason4").value;
  const Reason4Value = document.getElementById("reason5").value;
  const Reason5Value = document.getElementById("reason6").value;
	openModal() 

  // Redirect to a new page or perform other actions after submission
 /* window.location.href = 'new.html';*/
}


 


// Add a function to handle the click on feedback items
function handleFeedbackClick(radioId) {
  const feedbackRadios = document.getElementsByName("feedback");

  // Loop through all feedback radios to add/remove the "inactive" class
  for (const radio of feedbackRadios) {
    const feedbackItem = radio.closest(".item");
    if (radio.id === radioId) {
      feedbackItem.classList.remove("inactive");
    } else {
      feedbackItem.classList.add("inactive");
    }
  }
}

// Add a function to handle the click on servant items
function handleServantClick(radioId) {
  const servantRadios = document.getElementsByName("servant");

  // Loop through all servant radios to add/remove the "inactive" class
  for (const radio of servantRadios) {
    const servantItem = radio.closest(".item1");
    if (radio.id === radioId) {
      servantItem.classList.remove("inactive");
    } else {
      servantItem.classList.add("inactive");
    }
  }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzpuXqLpUnzOOEjCqO3H4Bl41DwylfHWDe0R6b1I6bvl-eqeQEDoN9CHZrL5TwvITo/exec'
const form = document.querySelector("form");

form.addEventListener('submit', e => {
e.preventDefault();
let data = new FormData(form);
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => console.log('Success!', response))
/*.then(() => {window.location.reload();})*/
.catch(error => console.error('Error!',error.message))
})

function addDashes(input) {
	input.value = input.value.replace(/\D/g, '')
	.replace(/(\d{2})(\d{7})(\d{1})/, '$1-$2-$3');
}
function limitInputLength(inputElement, maxLength) {
  if (inputElement.value.length > maxLength) {
    inputElement.value = inputElement.value.slice(0, maxLength); // Trim the input
    inputElement.setAttribute('disabled', 'disabled'); // Disable the input
  } else {
    inputElement.removeAttribute('disabled'); // Enable the input
  }
}
