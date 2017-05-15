document.querySelectorAll("input, textarea").forEach(function(item) {
  item.addEventListener("blur",function() {
    if (this.value.length) {
      this.classList.add("active");
    } else {
      this.classList.remove("active");
    }
  });
  var link = document.querySelector(".feedback-form-btn");
  var popup = document.querySelector(".feedback");
  var close = popup.querySelector(".feedback-close-btn");
  var form = popup.querySelector("form");
  var fio = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=email]");
  var storage = localStorage.getItem("email");
  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("feedback-show");
    popup.addEventListener('animationend', function(event){
      if (storage) {
        email.value = storage;
        email.classList.add("active") ;
        fio.focus();
      } else {
        email.focus();
      }
    }, false);
  });
  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("feedback-show");
  });
  form.addEventListener("submit", function(event) {
    if (!fio.value || !email.value) {
      event.preventDefault();
      console.log("Нужно ввести имя и почту"); 
    } 
    if(email.value) {
      localStorage.setItem("email", email.value);
    }
  });
  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("feedback-show")) {
        popup.classList.remove("feedback-show");
      }
    }
  });
});