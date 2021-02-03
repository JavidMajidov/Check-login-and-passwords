let userAd = document.querySelector("input[name='vehic']");
let userSoyad = document.querySelector("input[name='vehicl']");
let send = document.querySelector("input[name='btnd']");

userAd.addEventListener("focus", function () {
  this.style.backgroundColor = "";
});

userSoyad.addEventListener("focus", function () {
  this.style.backgroundColor = "";
});

userAd.addEventListener("blur", function () {
  if (this.value==""){
  this.style.backgroundColor = "red";
  }
});

userSoyad.addEventListener("blur", function () {
  if (this.value==""){
  this.style.backgroundColor = "red";
  }
});


let myBtn = document.querySelector('.btn');

let myRaziyam = document.querySelector("select[name='vehicle1']");

myRaziyam.addEventListener("change", function () {
  if (myRaziyam.value == "" ) {
    this.style.backgroundColor = "red";
  } else {
    this.style.backgroundColor = "red"; 
  }
});

let myCheck = document.querySelector("input[name='vehicle1']");

myBtn.addEventListener("submit", function (e) {
 e.preventDefault ();
 if(userAd.value==null && userSoyad.value==null) {
  userAd.style.backgroundColor = "red";
  userSoyad.style.backgroundColor = "red";
 };

});