$(document).ready(function(){

  $("form#testsubmit").submit(function(event){
    debugger;
    /*
    var question0 = "Would you like to answer some question?"
    var question1 = "Warm or cold?";
    var question2 = "dry or humid?"; // warm question
    var question3 = "Beach or mountain?"; // warm question
    var question4 = "Rain or snow?"; // cold question
    var question5 = "Do you enjoy outdoor activity or indoor activity?"
    var question6 = "Do you like big city or small city?";
    var question7 = "Museum or bar?"
    var question8 = "Coffee or beer?"
    */

    var questionBank = ["Would you like to answer some question?",
                         "Warm or cold?",
                         "dry or humid?",
                         "Beach or mountain?",
                         "Rain or snow?",
                         "Do you enjoy outdoor activity or indoor activity?",
                         "Do you like big city or small city?",
                         "Museum or bar?",
                         "Coffee or beer?"
                        ];

    var answer = $("input#enterHere").val();


 //while (answer !== "no") {
   if (answer === "warm") {
     $("span.question").text(questionBank[2]);
   }
   else if (answer === "dry") {
     $("span.question").text(questionBank[6]);
   }
   else if (answer === "big") {
     $("span.question").text(questionBank[5]);
   }
   else if (answer === "outdoor") {
      $("span.question").text(questionBank[3]);
    }
    else if (answer === "beach") {
      $("span.here").text("Hawaii");
      $(".answer").show();
    }
    else if (answer === "mountain"){
      $("span.here").text("Austin");
      $(".answer").show();
    };

    if (answer === "cold") {
     $("span.question").text(questionBank[4]);
    }
    else if (answer === "rain" || answer === "snow") {
      $("span.question").text(questionBank[8]);
       }
    else if (answer === "beer") {
      $("span.question").text(questionBank[7]);
       }
    else if (answer === "bar") {
      $("span.here").text("Dublin");
      $(".answer").show();
    }
    else if (answer === "museum") {
      $("span.here").text("France");
      $(".answer").show();
    }

    event.preventDefault();

  });
});
