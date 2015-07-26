
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var counter = 0;

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
    alert("Blue Wins!");
  }
   else if (d + e + f === 12) {
     alert("Blue Wins!");
   }
   else if (g + h + i === 12) {
     alert("Blue Wins!");
   } 
   else if (a + d + g === 12) {
     alert("Blue Wins!");
   }
   else if (b + e + h === 12) {
     alert("Blue Wins!");
   }
   else if (c + f + i === 12) {
     alert("Blue Wins!");
   }
   else if (a + e + i === 12) {
     alert("Blue Wins!");
   }
   else if (c + e + g === 12) {
     alert("Blue Wins!");
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
  alert("Red Wins!");
  $("#clickButton").css("visibility", "visible");
};

function blueWins () {
  alert("Blue Wins!");
  $("#clickButton").css("visibility", "visible");
};

function restart() {
  location.reload();
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




// var red = [];
// var blue = [];

// var winningCombos = [["box1","box2","box3"],
//                      ["box4","box5","box6"],
//                      ["box7","box8","box9"],
//                      ["box1","box4","box7"],
//                      ["box2","box5","box8"],
//                      ["box3","box6","box9"],
//                      ["box1","box5","box9"],
//                      ["box3","box5","box7"]];


// for (i=0; i<red.length; i++) {
//   for (j=0; j<winningCombos.length; j++) {
//     for (k=0; k<winningCombos[j]; k++) {
//       if (red[i] === winningCombos[j][k]) {
//         var a = true;
//         console.log(red[i]);
//       }
//     }
//   }
// }


// // for (var i = 0; i < winningCombos.length; i++) {
// //   console.log(red);
// //   console.log(winningCombos[i]);
// //           if (red === (winningCombos[i])) {
// //             winner.push(winningCombos[i]);
// // }
// }


// for (var i = 0; i < winningCombos.length; i++) {
//   for (var j = 0; j < winningCombos[i].length; j++) {
//     console.log(winningCombos[i]);
//     for (k = 0; k < red.length; k++) {
//       if (red([k]) === winningCombos([i][j])) {
//       // console.log(winningCombos[i][j]);
//       winner.push(winningCombos[i][j]);
//       console.log(winner);
//       }
//     }
//   } 
//     if (winner.length === 3) {
//         alert("you win");
//     }
// };


    // for (var i=0; i<blue.length; i++) {
    //   for (var j=0; j<winningCombos.length; j++) {
    //     for (var k=0; k<winningCombos[j].length; k++) {
    //       if (blue[i] === winningCombos[j][k]) {
    //       blueWinner.push(winningCombos[j][k])
    //       }
    //     }
    //   }
    // }






