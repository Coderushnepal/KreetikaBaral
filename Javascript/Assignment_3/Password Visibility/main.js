var icon = document.querySelector(".fas");        //querySelector() method only returns the first element that matches the specified selectors.
var input = document.querySelector(".input");

icon.addEventListener("click", function(){
  this.classList.toggle("active");                // this bhanera icon lai represent garchha
  if(input.type == "password"){
    input.type = "text";
  }
  else{
    input.type = "password";
  }
  
});




