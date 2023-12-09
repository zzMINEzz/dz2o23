let eMail = document.querySelector(".form__email");
let pAssword = document.querySelector(".form__pas");
let bUtton = document.querySelector(".form__btn");
let cHeckbox = document.querySelector(".form__checked");

eMail.addEventListener("input", function () {
  let emailValue = eMail.value;

  if (
    emailValue.length > 5 &&
    emailValue.includes("@") &&
    emailValue.includes(".")
  ) {
    eMail.classList.add("active");
    eMail.classList.remove("deactive");
  } else if (emailValue.length === 0) {
    eMail.classList.remove("deactive");
    eMail.classList.remove("active");
  } else {
    eMail.classList.remove("active");
    eMail.classList.add("deactive");
  }
});

pAssword.addEventListener("input", function () {
  let passwordValue = pAssword.value;
  let passwordFirstChar = passwordValue[0];

  if (
    passwordValue.length > 8 &&
    passwordFirstChar === passwordFirstChar.toUpperCase()
  ) {
    pAssword.classList.remove("deactive");
    pAssword.classList.add("active");
  } else if (passwordValue.length === 0) {
    pAssword.classList.remove("deactive");
    pAssword.classList.remove("active");
  } else {
    pAssword.classList.remove("active");
    pAssword.classList.add("deactive");
  }
});

bUtton.addEventListener("click", function () {
  let eMail = document.querySelector(".form__email");
  let pAssword = document.querySelector(".form__pas");
  let cHeckbox = document.querySelector(".form__checked");
  let naMe = document.querySelector(".form__name");
  let ascNumber = document.querySelector(".form__number");

  let checKed = cHeckbox.value;
  let emailValue = eMail.value;
  let passwordValue = pAssword.value;
  let nameValue = naMe.value;
  let newNumberValue = ascNumber.value;

  if (
    emailValue.length < 5 &&
    !emailValue.includes("@") &&
    !emailValue.includes(".")
  ) {
    
    let modalkaEMail = document.querySelector('.form__modalka_email')
    modalkaEMail.classList.add("open");
    eMail.classList.add("active");
    eMail.classList.remove("deactive");
    return;
  } else if (passwordValue.length < 7) {
    let modalkaPassword = document.querySelector('.form__modalka_password')
    
    modalkaPassword.classList.add("open");
    pAssword.classList.remove("deactive");
    pAssword.classList.add("active");
    
    return;
  } else if (nameValue.length === 0) {
    let modalkaName = document.querySelector('.form__modalka_name')
    modalkaName.classList.add("open")
    return;
  } else if (newNumberValue.length !== 13 && !newNumberValue.includes("+")) {
    
    let modalkaTel = document.querySelector('.form__modalka_tel')
    modalkaTel.classList.add("open")
    return;
  } else if (!cHeckbox.checked) {
    
    let modalkaCHECKBOX = document.querySelector('.form__modalka_checkbox')
    modalkaCHECKBOX.classList.add("open")
    return;
  } else {
      sessionStorage.setItem("nameValue", nameValue);
    window.location.href = "./bank.html";
  }
});
