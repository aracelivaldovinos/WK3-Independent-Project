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
  return output
}  









