var beepBoop = function(userInput) {
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

$(document).ready(function() {
  $("form#formOne").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    if (!name){
      alert("Please enter your name");
    };
    var userInput = parseInt($("#inputNumber").val());
    if (!userInput){
      alert("Please enter a number");
    } else {
      $(this).addClass('magictime foolishIn');
    };
    var output = beepBoop(userInput);
    var stringOutput = output.join("");
    var outputName = stringOutput.replace(/Dave/g, name)
    $("#result").addClass('magictime vanishIn').show();
    $("#result").text(outputName);
    $("img").addClass('magictime foolishIn').show();
    $("#img")[0].scrollIntoView();
  });

  $("form#formTwo").submit(function(event) {
    event.preventDefault();
    var name = $("input#name").val();
    if (!name){
      alert("Please enter your name");
    };
    var userInput = parseInt($("#inputNumber").val());
    if (!userInput){
      alert("Please enter a number");
    } else {
      $(this).addClass('magictime foolishIn');
    };
    var output = beepBoop(userInput);
    var reverseArray = output.reverse();
    var reverseOutput = reverseArray.join("");
    var reverseOutputName = reverseOutput.replace(/Dave/g, name)
    $("#result").addClass('magictime vanishIn').show();
    $("#result").text(reverseOutputName);
    $("#img").addClass('magictime foolishIn').show();
    $("#img")[0].scrollIntoView();
  });
});
