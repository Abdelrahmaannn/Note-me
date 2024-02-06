var email = document.getElementById("email");

var emailValidation = document.getElementById("emailValidation");

var password = document.getElementById("password");

var passwordValidation = document.getElementById("passwordValidation");

var logInBtn = document.querySelector(".my-btn");

var usersList = [];

if (localStorage.getItem("Users") != null) {
  usersList = JSON.parse(localStorage.getItem("Users"));
}

logInBtn.addEventListener("click", goToHome);
function goToHome() {

    if(forEmailVslidation() && forPasswordValidation() )
    {
        
    window.location.href = "Home.html";

    }

}

// ***********************************************************
//*********************************************************** */

email.addEventListener("change", forEmailVslidation);
function forEmailVslidation() {
  for (var i = 0; i < usersList.length; i++) {
    if (usersList[i].email === email.value) {
      email.classList.add("is-valid");
      email.classList.remove("is-invalid");
      emailValidation.classList.add("d-none");
      localStorage.setItem("userName", JSON.stringify(usersList[i].name ))

      return true;
    }
  }

  //7atet el else bra scope el for 3shan lw 7atetha gwa fe awl el for loop lw condition el if m4t8lsh ht5o4 3la el else 3latol
  //fa lma a7otha bra kda el for ht4t8l l7d el a5r fe el if we lw el condition m4 s8al l7d a5r el for tb2a t5o4 el else

  email.classList.remove("is-valid");
  email.classList.add("is-invalid");
  emailValidation.classList.remove("d-none");
  return false;
}

// ***********************************************************
//*********************************************************** */

password.addEventListener("change", forPasswordValidation);
function forPasswordValidation() {
  for (var i = 0; i < usersList.length; i++) {
    if (usersList[i].password === password.value) {
      password.classList.add("is-valid");
      password.classList.remove("is-invalid");
      passwordValidation.classList.add("d-none");

      return true;
    }
  }

  //7att el else bra scope el for 3shan lw 7atetha gwa fe awl el for loop lw condition el if m4t8lsh ht5o4 3la el else 3latol
  //fa lma a7otha bra kda el for ht4t8l l7d el a5r fe el if we lw el condition m4 s8al l7d a5r el for tb2a t5o4 el else

  password.classList.remove("is-valid");
  password.classList.add("is-invalid");
  passwordValidation.classList.remove("d-none");
  return false;
}
