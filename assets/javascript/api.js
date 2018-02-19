//jquery IIFE wrapper 
// (function () {
    
//my giphy array
let topics = ["funny cat", "stupid cat", "angry cat", "black cat", "pink panther", "happy cat", "ren & stimpy", "scared cat", "little cat", "party cat"];

// Function for displaying movie data
function renderButtons() {

    // Deleting previous buttons so there are no repeats
    $("#buttons").empty();

    // Looping through the array of giphys
    for (var i = 0; i < topics.length; i++) {

        // Then dynamicaly generating buttons for each button in the array.
        var a = $("<button>");
        // Adding a class to control look of buttons
        a.addClass("button-style");
        // Adding a data-attribute with a value of the giphy at index i
        a.attr("data-name", topics[i]);
        // Providing the button's text with a value of the giphy at index i
        a.text(topics[i]);
        // Adding the button to the HTML div
        $("#buttons").append(a);
    }
}

var giphy = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + giphy + "EIpYTvueaeOpXTfZnE0whYIyMPq0CS9l&q=&limit=10&offset=0&rating=G&lang=en";

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
$("#rating").text("Rating: " + response.rating);

$("#url").text(response.url);

//     // We store all of the retrieved data inside of an object called "response"
    

        //      This code lets users add to the buttons I've already generated
        //      This function handles events where one button is clicked
        //      $("#add-button").on("click", function(event) {
        //     // event.preventDefault() prevents the form from trying to submit itself.
        //     // We're using a form so that the user can hit enter instead of clicking the button if they want
        //     event.preventDefault();

        //     // This line will grab the text from the input box
        //     var movie = $("#movie-input").val().trim();
        //     // The movie from the textbox is then added to our array
        // //     movies.push(movie);

        //     // calling renderButtons which handles the processing of our giphy array
        //     renderButtons();
        //   });

        // Calling the renderButtons function at least once to display the initial list of bustton
   

    });

    renderButtons();
// });