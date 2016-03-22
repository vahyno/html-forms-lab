console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("form").submit(function(event){
    event.preventDefault(); // stop the form from submitting
    var form_data = $(this).serialize(); // "s=avatar&year=2009"

    $.ajax({
      method: "GET",
      url: "http://www.omdbapi.com",
      data: form_data,
      success: renderJsonResponseToPage
    })

  })

  function renderJsonResponseToPage(response_json){
    var formatted_json = JSON.stringify(response_json, true, 4)
    $("pre").text(formatted_json)
  }

});
