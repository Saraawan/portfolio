var professions = ["Web Developer", "Designer", "Front End Developer"];
var currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".typing", {
    strings: [professions[currentIndex]],
    typeSpeed: 100,
    backspeed: 60,
    loop: false,
    onComplete: function () {
      currentIndex++;
      if (currentIndex >= professions.length) {
        currentIndex = 0; // Reset index to start from the beginning
      }
      typed.reset(); // Reset Typed instance
      typed.strings = [professions[currentIndex]]; // Update strings
      typed.start(); // Start typing again
    },
  });
});
