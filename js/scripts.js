//UI Logic
$("document").ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    const number = $("input#number").val()
    const arrayOutput = beepBoop(number)

    $("#array").text(arrayOutput)
    
  });
});

//Business Logic

function beepBoop (string) {
  const number = parseInt(string)
  const output = [ ]
  for (let i=0; i <=number; i+=1) {
  output.push(i)
  }
  return output
}

function beepBoop (numbers) {
  const numbersArray = numbers.split();
  const selectNumbers = ["1", "2", "3"]
  let word= []
  for (let i=0; i < selectNumbers.length; i++) {
    if (numbers.includes(selectNumbers[2])) {
      return word = "Won't you be my neighbor?"
    }
    else if (numbers.includes(selectNumbers[1])){
      return word = "Boop!"
    }
    else if (numbers.includes(selectNumbers[0])) {
      return word = "Beep!"
    }
  }
  return numbersArray
}



