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

function beepBoop(userNum, array, string) {
  const number = parseInt(userNum)
  let output = []
  for (let i=0; i <=userNum; i+=1) {
    output.push(i)
    }
    string = output.join().split(", ")
    for (let i=0; i<string.length; i++){
      if (string[i].includes("3")) {
        string[i] = "Won't you be my neighbor?"
        return string
      }
      else if (string[i].includes("2"))  {
        string[i] = "Boop!"
        return string
      }
      else if (string[i].includes("1"))  {
        string[i] = "Beep!"
        return string
      }
      return false
    }
}





