
// $("td").click(function() {
// var clicks = $(this).data('clicks');
//     if(clicks){
//     $(this).css("background-color","red");
// }else {
//     $(this).css("background-color","blue");
// }
// $(this).data("clicks", !clicks);
// });

var newColorRed= []

$("table").on("click", ".boxes", function() {
  console.log(event);
  $(this).css("background-color", "red");
  $("td").removeClass("boxes");
  $("td").addClass("boxes2");
  $(this).addClass("red");

for (i= 0; i < color.length; i++) {
	var colorRed = color[i].classList.contains("red");
	if (colorRed === true) {
		 newColorRed.push(color[i]);
		
	}
	};
});


$("table").on("click", ".boxes2", function() {
	$(this).css("background-color", "blue");
	$("td").removeClass("boxes2");
	$("td").addClass("boxes");
	 $(this).addClass("blue");

for (i= 0; i < color.length; i++) {
	var colorBlue = color[i].classList.contains("blue");
	if (colorBlue === true) {
		 colorCountBlue();
	}
};
    
});



function colorCountBlue() {
	console.log("blue");
}


var tData = document.getElementsByTagName("td");
var color = jQuery.makeArray( tData );













