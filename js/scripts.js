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

function beepBoop(userNum, array, string) {
  const number = parseInt(userNum)
  let output = []
  for (let i=0; i <=userNum; i+=1) {
    output.push(i)
    }
    string = output.join().split(", ")
    for (let j=0; j<string.length; j++){
      if (string[i].includes("3")) {
        string[i] = "1"
        return string
      }
      else if (string[j].includes("2"))  {
        let newNum = string[j].replace("2", "Boop!")
      
      }
      else if (string[j].includes("1"))  {
        string[j] = "Beep!"
      }
    
    }
    
}







