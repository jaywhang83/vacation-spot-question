var warOrColdQuestion = "warm or cold?";
var dryOrHumidQuestion = "dry or humid?";
var beachOrMountainQuestion = "beach or mountain?";
var indoorOrOutdoorQuestion = "Do you enjoy outdoor activity or indoor activity?";
var bigcityOrSmallcityQuestion =  "Do you like big city or small city?";
var museumOrBarQuestion = "museum or bar?";
var coffeOrtea = "coffee or tea?";
var rainOrSnow = "rain or snow?";
var beerOrwine = "beer or wine?";

var q;
var p;
$(document).ready(function(){
  $("form#testsubmit").submit(function(event){
    debugger;
    var answer = $("input#enterHere").val();

    if (answer === "warm") {
      $("span.question").text(dryOrHumidQuestion);
    }
    else {
      if (answer === "cold"){
        $("span.question").text(rainOrSnow);
      }
      else {
        route(answer);
      }
    }

    function route(answer) {
      if (answer === "humid" || answer === "dry") {
        $("span.question").text(bigcityOrSmallcityQuestion);
      }
      else if (answer === "rain" || answer === "snow"){
        $("span.question").text(beerOrwine);
        p = 1;
      }
      else {
        if (p === 1) {
          coldRoute(answer);
        }
      }

      if (answer === "big" || answer === "small") {
        $("span.question").text(museumOrBarQuestion);
        q = 1;
      }
      else {
        if (q === 1){
          warmRoute(answer);
        }
      }
    }

    function warmRoute(answer) {
      if (answer === "bar") {
        $("span.question").text(indoorOrOutdoorQuestion);
      }
      else if (answer === "museum") {
        $("span.question").text(beachOrMountainQuestion);
      }
      else {
        if (answer === "indoor") {
          $("span.here").text("Rome, Italy");
          $(".answer").show();
        }
        else if (answer === "outdoor") {
          $("span.here").text("Croatia");
          $(".answer").show();
        }
        else if (answer === "beach") {
          $("span.here").text("Sydney");
          $(".answer").show();
        }
        else if (answer === "mountain") {
          $("span.here").text("Austin");
          $(".answer").show();
        }
      }
    }

    function coldRoute(answer) {
      if (answer === "beer") {
        $("span.question").text(indoorOrOutdoorQuestion);
      }
      else if (answer === "wine") {
        $("span.question").text(beachOrMountainQuestion);
      }
      else {
        if (answer === "indoor") {
          $("span.here").text("Venice, Italy");
          $(".answer").show();
        }
        else if (answer === "outdoor") {
          $("span.here").text("London");
          $(".answer").show();
        }
        else if (answer === "beach") {
          $("span.here").text("Hawaii");
          $(".answer").show();
        }
        else if (answer === "mountain") {
          $("span.here").text("Berlin");
          $(".answer").show();
        }
      }
    }
    event.preventDefault();
  });
});
