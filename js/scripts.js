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

    //function answerHolder() {
      var answer = $("input#enterHere").val();
    //}
      //$(".maybehere").text("<p>Question?</p>");
      $(".here").text(answer);
      $(".answer").show();
      var flag = true;
    //  if ((answer === "yes") || (answer === "no")) {
        //alert("Invalid option please enter yes or no");
        if (answer === "yes") {
          $("span.question").text(question1); // goes to warm or cold question
          if (answer === "warm" && flag) {
            $("span.question").text(quesion2); // goes to dry or humid question
            if (answer === "dry" && flag) {
              $("span.question").text(question6); // goes to big city or small city
              if (answer === "big city") {
                $("span.question").text(question5);
                if(answer === "outdoor"){
                  (".here").text();
                }
                else {

                }
              }
              else {

              }
            }
            else {

            }

          }
          else {

          }
        }
        else {
            $("span.question").text("GoodBye");
        }
        /*
      }
      else {
      }
*/
      event.preventDefault();

  });
});
