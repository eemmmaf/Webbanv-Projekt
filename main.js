"use strict";

//Variabler
let hamburger = document.getElementById("hamburger-icon");
let navUl = document.getElementById("nav-ul");
let i;

window.onload = init;

function init() {

  //Funktion för hamburger-menyn
  hamburger.addEventListener("click", () => {
    navUl.classList.toggle("show");
  })




  /*Expanderade knappar och artiklar*/
  let buttonEl = document.getElementsByClassName("collaps-btn");

  for (i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";

        //Ändrar aria-expended från true till false(infälld knapp)
        this.setAttribute("aria-expanded", "false");

        //Ändrar pil-ikonerna
        this.firstElementChild.classList.remove("fa-chevron-up");
        this.firstElementChild.classList.add("fa-chevron-down");
      } else {
        content.style.display = "block";

        //Ändrar aria-expanded från false till true(utvidgad knapp)
        this.setAttribute("aria-expanded", "true");

        //Ändrar pilikonerna
        this.firstElementChild.classList.remove("fa-chevron-down");
        this.firstElementChild.classList.add("fa-chevron-up");
      }
    });

  }

}

//Funktion användaren avbokar. Öppnar upp avbokningsruta vid klick
let unbookBtns = document.getElementsByClassName("unbook-btn");
for (i = 0; i < unbookBtns.length; i++) {
  //Lägger till en eventlistener på de loopade knapparna
  unbookBtns[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let text = this.nextElementSibling;
    if (text.style.display === "block") {
      text.style.display = "none";
      //Ändrar aria-expended från true till false(infälld knapp)
      this.setAttribute("aria-expanded", "false");


    } else {
      text.style.display = "block";

      //Ändrar aria-expanded från false till true(utvidgad knapp)
      this.setAttribute("aria-expanded", "true");

    }
  });

}

//Funktion med alertbox när bokningen är avbokad
function unbookClicked() {
  alert("Din bokning är avbokad");
}

//Funktion för att stänga ner avbokningsrutan vid klick på "Avboka"
let closeButton = document.getElementsByClassName("unbook-trip-btn");
for (i = 0; i < closeButton.length; i++) {
  //Lägger till en eventlistener på de loopade knapparna
  closeButton[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let output = this.parentElement;
    if (output.style.display === "block") {
      output.style.display = "none";
    } else {
      output.style.display = "block";

    }
  });

}


//Funktion för "ändra resa"-knapparna
let changeButton = document.getElementsByClassName("change-btn");
for (i = 0; i < changeButton.length; i++) {
  //Lägger till en eventlistener på de loopade knapparna
  changeButton[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let outputChange = this.nextElementSibling;
    if (outputChange.style.display === "block") {
      outputChange.style.display = "none";


    } else {
      outputChange.style.display = "block";

    }
  });

}
//Funktion för att bekräfta att ens bokning är avbokad
function changeAlert() {
  alert("Din bokning har ändrats");
}



//Knapp för att ta fram tidväljaren där användaren väljer tid för hemresa
let tripHomeBtnEl = document.getElementById("trip-home-btn");
//If-sats för att kolla så att inte tripHomeBtnEl är null
if (tripHomeBtnEl) {
  tripHomeBtnEl.addEventListener("click", tripBack, false)
  function tripBack() {
    this.classList.toggle("active");
    let showTime = this.nextElementSibling;
    if (showTime.style.display === "block") {
      showTime.style.display = "none";
      //Ändrar minus till plus-ikon
      this.firstElementChild.classList.remove("fa-minus-circle");
      this.firstElementChild.classList.add("fa-plus-circle");

    } else {
      showTime.style.display = "block";
      //Ändrar plus till minus-ikon
      this.firstElementChild.classList.remove("fa-plus-circle");
      this.firstElementChild.classList.add("fa-minus-circle");

    }
  }
}


//Funktion för att skriva ut "Tack för din bokning". Anropas vid ett "onclick" på knappen
function thankYouFunction() {
  let thankEl = document.getElementById("thanks-p");
  //"Tack för din bokning" skrivs ut
  thankEl.innerHTML += "<p>" + "Tack för din bokning!" + "<br>" + "Du hittar bokningen under:  " + "</p>" + '<a href=' + "mypage.html" + ">" + "Mina sidor" + "</a>";
  //Knappen blir avaktiverad vid klick så att "Tack för din bokning" endast skrivs ut en gång
  document.getElementById("trip-home").disabled = true;
}

//Funktion för att skriva ut "Hemresan har lagts till". Anropas vid ett "onchange" på knappen
function added() {
  let added = document.getElementById("added");
  //"Hemresan har lagts till" skrivs ut
  added.innerHTML += "Hemresan har lagts till <br>";
}
















