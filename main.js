const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

// Name validation
function validateName() {
  const name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.textContent = "Name is required";
    return false;
  }
  if (
    !name.match(/^[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ\s'-]*[A-Za-zÀ-ÖØ-öø-ÿ]$/)
  ) {
    nameError.textContent = "Write you full name";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

//Phone number validation
function validatePhone() {
  const phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.textContent = "Phone Number is required";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.textContent = "Write your Phone Number";
    if (phone.length >= 12) {
      phoneError.textContent =
        "Phone Number should be not be greater then 12 number with country code ";
      return false;
    }
    return false;
  }
  phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

// email valdiation
function validateEmail() {
  const email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.textContent = "Email is required";
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
    emailError.textContent = "Invalid email address";
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

// message validation
function validateMessage() {
  const message = document.getElementById("contact-message").value;
  const requiredCharacters = 20;
  const leftCharacters = requiredCharacters - message.length;

  if (leftCharacters > 0) {
    messageError.textContent = `${leftCharacters}  more characters left`;

    return false;
  }

  messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

// submit validation
function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    /* submitError.style.display = "block"; */
    submitError.textContent = "Please check all the fields";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
