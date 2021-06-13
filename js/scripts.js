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
      if (string[j].includes("3")) {
        let newNum = string[j].replace("3", "Won't you be neighbor?")
        return newNum


        //string[j].replace("Won't you be my neighbor?") 
        
      }
      else if (string[j].includes("2"))  {
        string[j] = "Boop!"
      }
      else if (string[j].includes("1"))  {
        string[j] = "Beep!"
      }
    return string 
    }
    
}







