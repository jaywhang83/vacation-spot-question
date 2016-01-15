$(document).ready(function(){

  $("form#testsubmit").submit(function(event){
    debugger;
    var warmDestination = {
                          america:
                          {beach: "Hawaii",
                          mountain: "Colorado"},
                          europe:
                          {beach: "Croatia",
                            mountain: "Spain"},
                          asia:
                          {beach: "Singapore",
                            mountain: "Laos"}
                        };

    var coldDestination = {
                          america:
                          {beach: "Alaska",
                          mountain: "Cananda"},
                          europe:
                          {beach: "Iceland",
                            mountain: "Russia"},
                          asia:
                          {beach: "Japan",
                            mountain: "China"}
                        };
    var question0 = "Would you like to answer some question?"
    var question1 = "Warm or cold?";
    var question2 = "dry or humid?"; // warm question
    var question3 = "Beach or mountain?"; // warm question
    var question4 = "Rain or snow?"; // cold question
    var question5 = "Do you enjoy outdoor activity or indoor activity?"
    var question6 = "Do you like big city or small city?";
    var question7 = "Museum or bar?"
    var question8 = "Coffee or beer?"

    var answer = $("input#enterHere").val();


 //while (answer !== "no") {
   if (answer === "warm") {
     $("span.question").text(question2);
   }
   else if (answer === "dry") {
     $("span.question").text(question6);
   }
   else if (answer === "big") {
     $("span.question").text(question5);
   }
   else if (answer === "outdoor") {
      $("span.question").text(question3);
    }
    else if (answer === "beach") {
      $("span.here").text("Hawaii");
      $(".answer").show();
    }
    else if (answer === "mountain"){
      $("span.here").text("Austin");
      $(".answer").show();
    };

   /*
   else if (answer === "outdoor") {

   }
   */
    if (answer === "cold") {
     $("span.question").text(question4);
    }
    else if (answer === "rain" || answer === "snow") {
      $("span.question").text(question8);
       }
    else if (answer === "beer") {
      $("span.question").text(question7);
       }
    else if (answer === "bar") {
      $("span.here").text("Dublin");
      $(".answer").show();
    }
    //else if ()



 //}
      event.preventDefault();

  });
});
