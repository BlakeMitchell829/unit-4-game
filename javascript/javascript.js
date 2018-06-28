$(document).ready(function() {

var randomResult;
var lost = 0;
var win = 0;
var score = 0;

var resetAndStart = function () 

    $(".crystals").empty();

    var images = [
        https://cdn.pixabay.com/photo/2015/11/22/19/01/pink-diamond-1056757_960_720.png

    randomResult = Math.floor(Math.random() * 69) + 30;

    console.log(randomResult);

  //generates four crystals with random numbers
  $("#result").html('Magic Number: ' + randomResult);
  //four crystals with four random numbers and the div for the random number

  for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;

    console.log(random);

    var crystal = $("<div>");
    crystal.attr({
      "class": 'crystal',
      "data-random": random
    });
    crystal.css({
      "background-image": "url('" + images[i] + "')",
      "background-size": "cover"
    });

    // crystal.html(random);

    $(".crystals").append(crystal);

  }
}

$("#previous").html(previous);

resetAndStart();

//event delegation 

$(document).on('click', ".crystal", function () {

  var num = parseInt($(this).attr('data-random'));

  previous += num;

  $("#previous").html(previous);

  console.log(previous);

  if (previous > randomResult) {
    lost++;

    $("#lost").html(lost);

    previous = 0;

    resetAndStart();

  } else if (previous === randomResult) {
    win++;

    $("#win").html(win);

    previous = 0;


    resetAndStart();
  }

});
  
]

randomResult = Math.floor(Math.random() * 69) + 30;

console.log(randomResult);

//generates four crystals with random nu