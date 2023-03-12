const go = document.querySelector(".go");
const emailErrorMessage = document.querySelector(".email-error-message");
go.addEventListener("click", function () {
  const email = document.getElementById("email");
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.value === "") {
    emailErrorMessage.classList.add("error");
    emailErrorMessage.style.display = "block";
    emailErrorMessage.innerHTML = "Please insert your email";
  } else if (email.value.match(mailformat)) {
    email.classList.add("success");
    emailErrorMessage.style.display = "none";
  } else {
    emailErrorMessage.classList.add("error");
    emailErrorMessage.style.display = "block";
    emailErrorMessage.innerHTML = "Please insert a valid email";
  }
});
