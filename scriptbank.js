let nameValue = sessionStorage.getItem("nameValue");
document.querySelector(".form__username").innerHTML = nameValue;

let cvvNUMBer = document.querySelector(".form__block-cvv");
let cardCVV = document.querySelector(".card__cv");
cvvNUMBer.addEventListener("click", (event) => {
  event.preventDefault();
});
cvvNUMBer.addEventListener("click", function () {
  let randomCVV = Math.floor(Math.random() * 900) + 100;
  cardCVV.textContent = "CVV-" + randomCVV;
});

//  name and surname //
let nameNAME = document.querySelector(".card__name");
let inputNAME = document.querySelector(".form__block-name");
inputNAME.addEventListener("input", (event) => {
  event.preventDefault();
});
inputNAME.addEventListener("input", function () {
  let newTextname = inputNAME.value;
  nameNAME.textContent = newTextname;
});

let inputSurname = document.querySelector(".form__block-surname");
let nameSurname = document.querySelector(".card__surname");
inputSurname.addEventListener("input", (event) => {
  event.preventDefault();
});
inputSurname.addEventListener("input", function () {
  let newTextSurname = inputSurname.value;
  nameSurname.textContent = newTextSurname;
});

// card data //
let cardDATE = document.querySelector(".card__date");
let inputDATE = document.querySelector(".form__block-date");
inputDATE.addEventListener("change", function () {
  let newInputDAte = inputDATE.value;
  let inputThreeNumber = newInputDAte.split("-");
  if (inputThreeNumber.length === 3) {
    let yearDATE = inputThreeNumber[0];
    let monthDATE = inputThreeNumber[1];
    let dayDATE = inputThreeNumber[2];
    cardDATE.textContent = `${monthDATE}/${yearDATE}`;
  }
});
// card number
let cardNumber = document.querySelector(".card__number");
let cardBtn = document.querySelector(".form__block-button");
cardBtn.addEventListener("click", (event) => {
  event.preventDefault();
});
cardBtn.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 9000) + 1000;
  let randomNumbertwo = Math.floor(Math.random() * 9000) + 1000;
  let randomNumberfour = Math.floor(Math.random() * 9000) + 1000;
  let randomNumberthree = Math.floor(Math.random() * 9000) + 1000;
  cardNumber.textContent =
    randomNumber +
    " " +
    randomNumbertwo +
    " " +
    randomNumberthree +
    " " +
    randomNumberfour;
});

// login //

let intBtn = document.querySelector(".form__btn_Two");

let modBlok = document.querySelector(".modal__blok");

let modal__x = document.querySelector(".modal__x");

intBtn.addEventListener("click", function () {
  if (modBlok.className === "modal__blok") {
    modBlok.style.opacity = "1";
  } else {
    modBlok.style.opacity = "0";
  }
});
modal__x.addEventListener("click", function () {
  if (modBlok.className === "modal__blok") {
    modBlok.style.opacity = "0";
  }
});
// ggga

window.addEventListener('scroll', function(){
  let scrollFORM = document.querySelector('.form_2')
  if (this.scrollY > 200) {
    scrollFORM.classList.add("forms")
  }
  else {
    scrollFORM.classList.remove("forms")
  }
})
window.addEventListener('scroll', function () {
  let scrollINFO = this.document.querySelector(".info__of_BANK");
  if (this.scrollY > 300) {
    scrollINFO.classList.add("infos")
  }
  else {
    scrollINFO.classList.remove("infos")
  }
})