let eMail = document.querySelector(".form__email");
let pAssword = document.querySelector(".form__pas");
let bUtton = document.querySelector(".form__btn");
let cHeckbox = document.querySelector(".form__checked");
let phoneNumber =document.querySelector(".form__number")
let ueserNAME = document.querySelector(".form__name");

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









bUtton.addEventListener('click', function () {
  let eMail = document.querySelector(".form__email");
  let pAssword = document.querySelector(".form__pas");
  let cHeckbox = document.querySelector(".form__checked");
  let phoneNumber = document.querySelector(".form__number");
  let ueserNAME = document.querySelector(".form__name");



  let emailValue = eMail.value;
  let usernameVALUE = ueserNAME.value;
  let passwordValue = pAssword.value;
  let checkBOXVALUE = cHeckbox.value
  let phoneNumberVALUE = phoneNumber.value;
  

if(emailValue.length < 5 &&
    !emailValue.includes("@") &&
  !emailValue.includes(".")) {
  
  alert('Тут могла бути ваша реклама але ти написав не правильно')
  return
  }
else if (passwordValue.length < 7) {
  alert("gde salo")
  return;
  }
else if (usernameVALUE.length === 0) {
  alert("kakoe tvoe imya ")
  return;
  }
else if (phoneNumberVALUE.length !== 13 && !phoneNumberVALUE.includes("+")) {
  alert("norm phone")
  return;
}
else if (checkBOXVALUE.checked) {
  alert("pruf")
  return;
  }
else {
  window.location.href = './bank.html'
  }
})

// card__form //
