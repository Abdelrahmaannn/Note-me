var userName = document.getElementById("userName");

var nameValidation = document.getElementById("nameValidation");

var email = document.getElementById("email");

var emailValidation = document.getElementById("emailValidation");

var emailExistence = document.getElementById("emailExistence");

var password = document.getElementById("password");

var passwordValidation = document.getElementById("passwordValidation");

var signUpBtn = document.querySelector(".my-btn");

var usersList = [];

if (localStorage.getItem("Users") != null) {
  usersList = JSON.parse(localStorage.getItem("Users"));
  //display
}

signUpBtn.addEventListener("click", addUser);
function addUser() {
  var userExist = false;
  if ((forNameValidation()&& forEmailValidation() && forPasswordValidation())) {
    for (var i = 0; i < usersList.length; i++) {
      if (usersList[i].email == email.value) {
        userExist = true;
        break;
      }
    }

    /*ممكن اعملها برضو زي اللوجين اعمل ال ايف جوا الفور لووب و الايلس بره بره الفور عشان تلف علي ال ايف كلها بعدين تشوف الايلس لما تخلص الفور*/

    if (!userExist) {
      var user = {
        name: userName.value,
        email: email.value,
        password: password.value,
      };

      usersList.push(user);

      localStorage.setItem("Users", JSON.stringify(usersList));

      //redirect to login page
      window.location.href = "login.html";
    } 
    
    else 
    {
      emailExistence.classList.remove("d-none");
      email.classList.remove("is-valid");
      email.classList.add("is-invalid");
    }
  }
}

userName.addEventListener("change", forNameValidation);
function forNameValidation() {
  var regex = /^[a-zA-Z\s\-']{3,}$/;

  if (regex.test(userName.value)) {
    userName.classList.add("is-valid");
    userName.classList.remove("is-invalid");
    nameValidation.classList.add("d-none");

    return true;
  } else {
    userName.classList.remove("is-valid");
    userName.classList.add("is-invalid");
    nameValidation.classList.remove("d-none");

    return false;
  }
}

email.addEventListener("change", forEmailValidation);
function forEmailValidation() {
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (regex.test(email.value)) {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    emailValidation.classList.add("d-none");

    return true;
  } else {
    email.classList.remove("is-valid");
    email.classList.add("is-invalid");
    emailValidation.classList.remove("d-none");

    return false;
  }
}

password.addEventListener("change", forPasswordValidation);
function forPasswordValidation() {
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,10}$/;

  if (regex.test(password.value)) {
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
    passwordValidation.classList.add("d-none");

    return true;
  } else {
    password.classList.remove("is-valid");
    password.classList.add("is-invalid");
    passwordValidation.classList.remove("d-none");

    return false;
  }
}