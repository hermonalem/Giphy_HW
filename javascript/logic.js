
var musician = ["Beyonce", "Miguel", "Micheal Jackson", "Justin Timberlake", "Rolling Stones", "SZA", "Justin Beiber", "Bruno Mars", "Maroon 5", "Rihanna", "Pink", "Lady Gaga", "Taylor Swift"];

function renderButtons() {
  $("#giphybutton").empty();

for (var i = 0; i < musician.length; i++) {

  var a = $("<button>");

  a.addClass("giph");

  a.attr("data-name", musician[i]);

  a.text(musician[i]);

  $("#giphybutton").append(a);
  console.log(a)
}
}
renderButtons();

var queryURL = "https://api.giphy.com/v1/gifs/search?q=""&api_key=20Gf9AkkUB54jt5JFDBCy26OHsvlbKs9&limit=10";
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});






//var for array of subject, listed on top of page, as buttons//on ready function to start w/buttons  using a for loop to append button to page

//var to capture text of new entry, add to array, which adds new button//
  //re render button, make whole array render to page
  var searchInput = $("#search-input").val().trim();
  searchInput.push(movie);
//on click function for subject btns, to intiate search on giphy//

//make giphy move from still to 