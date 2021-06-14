//UI Logic
$("document").ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    const number = $("input#number").val()
    const arrayOutput = beepBoop(userNum)

    $("#array").text(arrayOutput)
    
  });
});

//Business Logic

function beepBoop(userNum) {
  const number = parseInt(userNum)
  let output = []
  for (let i=0; i <=userNum; i+=1) {
    output.push(i);
    }

    for (let j=0; j < output.length; j++){
      if (output[j].toString().includes("3")) {
        output[j] = "Won't you be my neighbor?"
      }
      else if (output[j].toString().includes("2"))  {
        output[j] = "Boop!"
      }
      else if (output[j].toString().includes("1"))  {
        output[j] = "Beep!"
        string = output.join().split(", ")
        return string
        
      }
    }
      }

    
  











