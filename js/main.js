//eye function change type of input from text to password or the opposite
//receive the id of the input
function band(id) {
  if (document.getElementById(id).type == "text") {
    //if the type is text change it to password
    return (document.getElementById(id).type = "password");
  }
  //if the type is password change it to text
  return (document.getElementById(id).type = "text");
}


//Email validation check if the email is vad
function validateEmail(email) {
  //regular expression
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //check if email is valid and turn it to lowerCase
  if (re.test(String(email).toLowerCase()) == false) {
    return alert("Please enter a valid email ");
  }
  return true;
}



//Password Validation Check if the password is valid
function validatePassword(password, passwordConfirmaion) {
  console.log("nam");
  if (password !== passwordConfirmaion) {
    //Password Validation Check if the password is the same as passwordConfirmaion
    return alert("Password does not match");
  }
  if (password.length >= 5) {
    //check if password has more than 5 chars
    return alert("Your form succesfuly sent");
  }
  return true;
}

//check if name is valid
function validateName(name) {
  //check if name have more than 3 chars
  if (name.length <= 3) {
    return alert("Please enter a valid name");
  }
  return true;
}



//validate all form
function val() {
  //get Email value
  const email = document.getElementById("email").value;
  //get password value
  const password = document.getElementById("password").value;
  //get name value
  const nom = document.getElementById("nom").value;
  //get password Confirmation value
  const passwordConfirmaion = document.getElementById("eyeConfirmation").value;
  //validate using fuctions
  if (
    validateEmail(email) &&
    validatePassword(password, passwordConfirmaion) &&
    validateName(nom)
  ) {
    alert("Form is Valid");
  }
  return false;
}
