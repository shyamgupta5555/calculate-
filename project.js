let button = document.querySelectorAll(".btn")
let screen = document.getElementById("number")

button.forEach(btn =>{
  btn.addEventListener('click' ,()=>{
    let screenValue = screen.value;
    let values = btn.innerHTML;
   
    screen.value += values;
    console.log(values)
    if(values == "C"){
      screen.value = ""
    }else if(values =="="){
  screen.value =eval(screenValue);
    }
  })
})