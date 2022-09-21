window.onscroll = function() {myFunction1()};

var navbar = document.getElementById("navbar1");
var navbar2 = document.getElementById("navbar2");
var sticky = navbar.offsetTop;

function myFunction1() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky" , "border1")
  } else {
    navbar.classList.remove("sticky" , "border1");
  }
  if (window.pageYOffset <= sticky){
    navbar.classList.remove("sticky" , "border1");
  }
  if (window.pageYOffset >= sticky) {
    navbar2.classList.add("imgnone")
  } else {
    navbar2.classList.remove("imgnone");
  }
  if (window.pageYOffset <= sticky){
    navbar2.classList.remove("imgnone");
  }
}

// sticky navbar 

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');


    checkbox.addEventListener('change', function () {

      if (checkbox.checked) {
        setTimeout(function () { $('.fr_lang').addClass("active-lang"); }, 000)


        console.log('Checked');

        // Disable English
        $('.en_lang').removeClass("active-lang")

      } else {
        // do that
        console.log('Not checked');
        $('.en_lang').addClass("active-lang");

        // Disable French
        $('.fr_lang').removeClass("active-lang")
      }
    });
  });
