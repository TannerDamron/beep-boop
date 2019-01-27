var beepBoop = function(userInput){
  var results = [];
  for (var i=0; i <= userInput; i++) {
    var inputString = (i).toString();
    if (i % 3 === 0 && i != 0) {
      results.push("I'm sorry, Dave. I'm afraid I can't do that. ");
    } else if (inputString.includes("1")) {
      results.push("Boop! ");
    } else if (inputString.includes("0")) {
      results.push("Beep! ");
    } else {
      results.push(i+", ");
    }
  }
  return results
}

$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    if (!name){
      alert("Please enter your name");
    };
    var userInput = parseInt($("#inputNumber").val());
    if (!userInput){
      alert("Please enter a number");
    };
    var output = beepBoop(userInput);
    var stringOutput = output.join("");
    var outputName = stringOutput.replace(/Dave/g, name)
    $("#result").hide();
    $("#result").fadeIn(2000);
    $("#result").text(outputName);
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
  $("form#formTwo").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var userInput = parseInt($("#inputNumber").val());
    var output = beepBoop(userInput);
    var reverseArray = output.reverse();
    var reverseOutput = reverseArray.join("");
    var reverseOutputName = reverseOutput.replace(/Dave/g, name)
    $("#result").hide();
    $("#result").fadeIn(2000);
    $("#result").text(reverseOutputName);
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
});
