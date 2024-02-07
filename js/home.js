
  var logoutBtn = document.querySelector(".my-btn");
  logoutBtn.addEventListener("click", function () {
    window.location.href = "login.html";
    localStorage.removeItem("Username");
  });

  if (localStorage.getItem("userName") != null) {
    var helloUser = JSON.parse(localStorage.getItem("userName"));
    document.getElementById("Username").innerHTML = `Hello  ` + helloUser;
  }

  /**********************************************************************
   * ********************************************************************
   */

  var noteName = document.getElementById("noteName");
  var noteBody = document.getElementById("noteBody");
  var notesList = [];

  if (localStorage.getItem("notesList") != null) {
    notesList = JSON.parse(localStorage.getItem("notesList"));
    dispalyNotes();
  }

  var addBtn = document.querySelector(".add-btn");

  // Add Function
  addBtn.addEventListener("click", function () {
    if (Validation() && Validation2()) {
      var note = {
        NoteName: noteName.value,
        NoteBody: noteBody.value,
      };

      notesList.push(note);
      localStorage.setItem("notesList", JSON.stringify(notesList));
      dispalyNotes();
    }
  });

  // Display Function
  function dispalyNotes() {
    var temp = " ";
    for (var i = 0; i < notesList.length; i++) {
      var x = `<div class="inner col-md-3">
        <div class="my-card mt-5">
          <h3>${notesList[i].NoteName}</h3>
          <p>${notesList[i].NoteBody}</p>
          <i class="fa-regular fa-pen-to-square edit"  data-bs-toggle="modal" data-bs-target="#exampleModal"></i> 
          <i onclick="deleteNote(${i})" class="fa-solid fa-trash delete"></i>
        </div>
      </div>`;
      temp += x;
    }
    document.querySelector(".notes").innerHTML = temp;
  }

  // delete function
  function deleteNote(i) {
    notesList.splice(i, 1);
    localStorage.setItem("notesList", JSON.stringify(notesList));
    dispalyNotes();
  }

  // search function
  var searchValue = document.querySelector(".first-section input");

  searchValue.addEventListener("keyup", function () {
    var temp = " ";
    for (var i = 0; i < notesList.length; i++) {
      if (
        notesList[i].NoteName.toLowerCase().includes(
          searchValue.value.trim().toLowerCase()
        )
      ) {
        var x = `<div class="inner col-md-3 " >
          <div class="my-card mt-5">
            <h3>${notesList[i].NoteName}</h3>
            <p>${notesList[i].NoteBody}</p>
            <i onclick="updateProduct(${i})" class="fa-regular fa-pen-to-square edit"  data-bs-toggle="modal" data-bs-target="#exampleModal"></i> 
            <i onclick="deleteNote(${i})" class="fa-solid fa-trash delete"></i>
          </div>
        </div>`;
        temp += x;
      }
    }
    document.querySelector(".notes").innerHTML = temp;
  });

  // clear function
  var clearBtn = document.querySelector(".clear-btn");

  clearBtn.addEventListener("click", function () {
    noteName.value = "";
    noteBody.value = "";
    noteName.classList.remove("is-valid");
    noteBody.classList.remove("is-valid");
    noteName.classList.remove("is-invalid");
    noteBody.classList.remove("is-invalid");
  });

  // validation for inputs
  noteName.addEventListener("change", Validation);
  function Validation() {
    var regex = /^[a-zA-Z0-9].+$/;
    if (regex.test(noteName.value)) {
      noteName.classList.add("is-valid");
      noteName.classList.remove("is-invalid");
      return true;
    } else {
      noteName.classList.remove("is-valid");
      noteName.classList.add("is-invalid");
      return false;
    }
  }

  noteBody.addEventListener("change", Validation2);
  function Validation2() {
    var regex = /^[a-zA-Z0-9].+$/;
    if (regex.test(noteBody.value)) {
      noteBody.classList.add("is-valid");
      noteBody.classList.remove("is-invalid");
      return true;
    } else {
      noteBody.classList.add("is-invalid");
      noteBody.classList.remove("is-valid");
      return false;
    }
  }

  // update function
  var updateBtn = document.querySelector(".update-btn");
  var currentIndex = 0;
  function updateProduct(i) {
    currentIndex = i;
    noteName.value = notesList[i].NoteName;
    noteBody.value = notesList[i].NoteBody;
    addBtn.classList.add("d-none");
    updateBtn.classList.remove("d-none");
  }

  updateBtn.addEventListener("click", function () {
    notesList[currentIndex].NoteName = noteName.value;
    notesList[currentIndex].NoteBody = noteBody.value;
    localStorage.setItem("notesList", JSON.stringify(notesList));
    dispalyNotes();
    addBtn.classList.remove("d-none");
    updateBtn.classList.add("d-none");
  });
