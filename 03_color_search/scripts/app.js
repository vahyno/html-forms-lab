console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("input[type=color]").change(function(){
    $("button").css("background-color", $(this).val())
  })

});
