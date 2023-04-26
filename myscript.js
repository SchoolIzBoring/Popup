// Define a function to generate a random color
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Define a function to generate a random size
function getRandomSize() {
  return Math.floor(Math.random() * 50) + 10;
}

// Define a function to generate a random position
function getRandomPosition(maxX, maxY) {
  return {
    x: Math.floor(Math.random() * maxX),
    y: Math.floor(Math.random() * maxY)
  };
}

// Define a function to create a square
function createSquare(canvas) {
  var context = canvas.getContext("2d");
  var color = getRandomColor();
  var size = getRandomSize();
  var position = getRandomPosition(canvas.width - size, canvas.height - size);

  context.fillStyle = color;
  context.fillRect(position.x, position.y, size, size);

  // Define a function to remove the square
  var removeSquare = function() {
    context.clearRect(position.x, position.y, size, size);
  };

  // Set timeout to remove the square after 20 seconds
  setTimeout(removeSquare, 20000);
}

// Define a function to create multiple squares
function createSquares(canvas) {
  var squares = [];
  var createSquaresIntervalId;

  // Define a function to add a square
  var addSquare = function() {
    var square = function() { createSquare(canvas); };
    squares.push(square);
    if (squares.length > 20) {
      var oldSquare = squares.shift();
      oldSquare();
    }
  };

  // Set up interval to create squares
  createSquaresIntervalId = setInterval(addSquare, 10);

  // Set timeout to stop creating squares after 20 seconds
  setTimeout(function() {
    clearInterval(createSquaresIntervalId);
    squares.forEach(function(square) {
      square();
    });
    squares = [];
  }, 20000);
}

// Add event listener to Yes button to load the script and create the squares
var yesButton = document.querySelector(".buttons button:first-of-type");
yesButton.addEventListener("click", function() {
  // Create an audio element and set its source to the audio file
  var audio = new Audio("path/to/audio/file.mp3");

  // Load the script
  var script = document.createElement("script");
  script.src = "myscript.js";
  document.head.appendChild(script);

  // Add a load event listener to the script to play the audio when it has loaded
  script.addEventListener("load", function() {
    audio.play();
  });

  // Create the canvas and squares
  var canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);
  createSquares(canvas);

  // Close the popup
  var popup = document.querySelector(".win98popup");
  popup.style.display = "none";
});
