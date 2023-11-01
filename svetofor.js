function redLight(){
    let red = document.querySelector(".red");
    red.style.backgroundColor ="red";
}
// redLight();

function yellowLight(){
    let yellow = document.querySelector(".yellow");
    yellow.style.backgroundColor="yellow";
}
// yellowLight()

function greenLight() {
  let yellow = document.querySelector(".green");
  yellow.style.backgroundColor = "green";
}
// greenLight();

function tl() {
  redLight();

  setTimeout(() => {
    yellowLight();

    setTimeout(() => {
      greenLight();

      setTimeout(yellowLight, 2_000);
    }, 2_000);
  }, 2_000);
}

tl();
setInterval(tl, 1_000);

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