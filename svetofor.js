function redLight(){
    let red = document.querySelector(".red");
    // red.style.backgroundColor ="red";
    red.classList.add("on");
    // yellow.classList.remove("on");
   
    // green.classList.remove("on");
}
// redLight();

function yellowLight(){
    let yellow = document.querySelector(".yellow");
    // yellow.style.backgroundColor="yellow";
    yellow.classList.add("on");
}
// yellowLight()

function greenLight() {
  let green = document.querySelector(".green");
  // yellow.style.backgroundColor = "green";
  green.classList.add("on");
}
// greenLight();

function tl() {
  redLight();

  setTimeout(() => {
    yellowLight();

    setTimeout(() => {
      greenLight();

      setTimeout(yellowLight, 5_000);
    }, 2_000);
  }, 5_000);
}

tl();
setInterval(tl, 14_000);

// setInterval(() =>{
//   setTimeout(() =>{
//      redLight();

//      setTimeout(() => {
//        yellowLight();
//        setTimeout(() => {
//           greenLight();
//        }, 2000)
//      },5000)
//   },2000)
  
  
  
// }, 1000);