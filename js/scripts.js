//UI Logic
$("document").ready(function(){
$("form#formOne").submit(function(event){
  event.preventDefault();
  const text = $("input#word").val()
  
  $("#array").text(text)

})
});







