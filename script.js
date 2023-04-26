window.addEventListener("load", function () {
  var popup = document.querySelector(".win98popup");
  var closeButton = document.querySelector(".bar button");
  var yesButton = document.querySelector(".buttons button:first-of-type");
  var noButton = document.querySelector(".buttons button:last-of-type");

  // Close popup when close button or no button is clicked
  closeButton.addEventListener("click", function () {
    popup.style.display = "none";
  });

  noButton.addEventListener("click", function () {
    popup.style.display = "none";
  });

  // Load and run myscript.js when yes button is clicked
  yesButton.addEventListener("click", function () {
    var script = document.createElement("script");
    script.src = "myscript.js";
    document.head.appendChild(script);
  });
});
