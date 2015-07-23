
// $("td").click(function() {
// var clicks = $(this).data('clicks');
//     if(clicks){
//     $(this).css("background-color","red");
// }else {
//     $(this).css("background-color","blue");
// }
// $(this).data("clicks", !clicks);
// });



$("table").on("click", ".boxes", function() {
  console.log(event);
  $(this).css("background-color", "red");
  $("td").removeClass("boxes");
  $("td").addClass("boxes2");
  console.log();
});


$("table").on("click", ".boxes2", function() {
	$(this).css("background-color", "blue");
	$("td").removeClass("boxes2");
	$("td").addClass("boxes")
    console.log("click");
});


