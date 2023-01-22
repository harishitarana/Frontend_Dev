document.querySelector('.container-button').addEventListener('click',function(){
    var input=document.querySelector("input").value
    console.log(input);
    pushToDOM(input);

});

document.querySelector(".container-textinput").addEventListener('keyup',function(){
  
   var input = document.querySelector("input").value;
   console.log(input);
 
 
   if(e.which === 13) {
    pushToDOM(input);
  }
 
 });

function pushToDOM(input) {

    var container = document.querySelector(".js-container");
    container.innerHTML = input;
  
  }
