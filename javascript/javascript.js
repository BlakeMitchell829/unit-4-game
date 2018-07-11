var randomResult;
var lost = 0;
var win = 0;
var score = 0;

function resetAndStart() {

  var crystalbuttons = $(".crystal").children();
  $.map(crystalbuttons, (thiscrystal) => {
    $(thiscrystal).attr("data-random", Math.floor(Math.random() * 11) + 1);
  });
  randomResult = Math.floor(Math.random() * 69) + 30;
  $("#number").html(randomResult);
  console.log(randomResult);
}
//generates four crystals with random numbers
$(".results").attr('results', randomResult);

//four crystals with four random numbers and the div for the random number

// var crystal = $(".crystal").children();
// for (var i = 0; i < 4; i++) {

//   var random = 
//   console.log(random);
//   $(crystal[i]).attr("data-random", random);
//   // crystal.html(random);

//   // $(".crystal").append(crystal);

// }

$("#score").html(score);

resetAndStart();

//event delegation 

$(document).on('click', ".crystal", function () {

  var num = parseInt($(this).attr('data-random'));

  score += num;

  $("#games").html(score);

  console.log(score);

  if (score > randomResult) {
    lost++;

    $("#lost").html(lost);

    score = 0;

    resetAndStart();

  } else if (score === randomResult) {
    win++;

    $("#win").html(win);

    games = 0;


    resetAndStart();
  }

})