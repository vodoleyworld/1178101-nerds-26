var link = document.querySelector(".modal-show");
  
  var popup = document.querySelector(".appointment");
  var close = popup.querySelector(".modal-close");
  var form = popup.querySelector("form");
  
  var login = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=email]");
  var letter = popup.querySelector("[name=letter]");
  var valid = popup.querySelector(".appointment-item");

  var isStorageSupport = true;
  var storage = "";
  
  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }
  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("appointment-show");
     if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("appointment-show");
  });

 form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();
      console.log("Нужно ввести логин и пароль");
      login.classList.add ("no-valid");
      email.classList.add ("no-valid");  
    } else {
    	if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
      localStorage.setItem("login", login.value);
    }

  });

 window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("appointment-show")) {
        popup.classList.remove("appointment-show");
      }
    }
  });