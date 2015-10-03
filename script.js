
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var turn = 0;
var counter = 0;
var redScore = 0;
var blueScore= 0;

$("#redScore").html("Red Score: " + redScore);
$("#blueScore").html("Blue Score: " + blueScore);

function redWinCheck () {
  if (a + b + c === 3) {
    redWins();
  }
   else if (d + e + f === 3) {
     redWins();
   }
   else if (g + h + i === 3) {
     redWins();
   } 
   else if (a + d + g === 3) {
     redWins();
   }
   else if (b + e + h === 3) {
     redWins();
   }
   else if (c + f + i === 3) {
     redWins();
   }
   else if (a + e + i === 3) {
     redWins();
   }
   else if (c + e + g === 3) {
     redWins();
   }
   else {
     draw();
   }
};

function blueWinCheck () {
  if (a + b + c === 12) {
    blueWins();
  }
   else if (d + e + f === 12) {
     blueWins();
   }
   else if (g + h + i === 12) {
     blueWins();
   } 
   else if (a + d + g === 12) {
     blueWins();
   }
   else if (b + e + h === 12) {
     blueWins();
   }
   else if (c + f + i === 12) {
     blueWins();
   }
   else if (a + e + i === 12) {
     blueWins();
   }
   else if (c + e + g === 12) {
     blueWins();
   }
   else {
     draw();
   }
};

function draw() {
  if (counter === 9) {
    alert("It's A Draw!");
    $("#clickButton").css("visibility", "visible");
  }
};

function redWins() {
  redScore += 1;
  $("#redScore").html("Red Score: " + redScore);
  alert("Red Wins!");
  $("#clickButton").css("visibility", "visible");
};

function blueWins () {
  blueScore += 1;
  $("#blueScore").html("Red Score: " + blueScore);
  alert("Blue Wins!");
  $("#clickButton").css("visibility", "visible");
};

function restart () {
  console.log("clicked");
  a = 0;
  b = 0;
  c = 0;
  d = 0;
  e = 0;
  f = 0;
  g = 0;
  h = 0;
  i = 0;
  turn = 0;
  counter = 0;
  $("td").removeClass("boxes2");
  $("td").removeClass("boxes");
  $("td").addClass("boxes");
  $("td").removeClass("blue");
  $("td").removeClass("red");
  $("td").css("background-color", "#DEEFF5");
  $("#clickButton").css("visibility", "hidden");
};

$("table").on("click", ".boxes", function() {
if ($(this).hasClass("blue") || $(this).hasClass("red")) {
  alert("Please choose a different square!")
} else {
    $(this).css("background-color", "red");
    $(this).addClass("red");
    $("td").removeClass("boxes");
    $("td").addClass("boxes2");
    // red.push($(this).attr("id"));
    turn = 1;
    if (($(this).attr("id") === "box1")) {
      a = 1;
    }
    else if (($(this).attr("id") === "box2")) {
      b = 1;
    }
    else if (($(this).attr("id") === "box3")) {
      c = 1;
    }
    else if (($(this).attr("id") === "box4")) {
      d = 1;
    }
    else if (($(this).attr("id") === "box5")) {
      e = 1;
    }
    else if (($(this).attr("id") === "box6")) {
      f = 1;
    }
    else if (($(this).attr("id") === "box7")) {
      g = 1;
    }
    else if (($(this).attr("id") === "box8")) {
      h = 1;
    }
    else if (($(this).attr("id") === "box9")) {
      i = 1;
    }
    counter += 1;
    redWinCheck();
  }
});

$("table").on("click", ".boxes2", function() { 
if ($(this).hasClass("blue") || $(this).hasClass("red")) {
  alert("Please choose a different square!")
} else { 
  $(this).css("background-color", "blue");
  $(this).addClass("blue");
  $("td").removeClass("boxes2");
  $("td").addClass("boxes");
  // blue.push($(this).attr("id"));
  turn = 0;
  if (($(this).attr("id") === "box1")) {
      a = 4;
    }
    else if (($(this).attr("id") === "box2")) {
      b = 4;
    }
    else if (($(this).attr("id") === "box3")) {
      c = 4;
    }
    else if (($(this).attr("id") === "box4")) {
      d = 4;
    }
    else if (($(this).attr("id") === "box5")) {
      e = 4;
    }
    else if (($(this).attr("id") === "box6")) {
      f = 4;
    }
    else if (($(this).attr("id") === "box7")) {
      g = 4;
    }
    else if (($(this).attr("id") === "box8")) {
      h = 4;
    }
    else if (($(this).attr("id") === "box9")) {
      i = 4;
    }
    counter += 1;
    blueWinCheck();
  }
}); 

