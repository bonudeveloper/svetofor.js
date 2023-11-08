// function time() {
//     let date = new Date();
//     // let now = document.querySelector("h1").innerHTML = date.toLocaleTimeString();
//     let time = document.querySelector(".colorTime");
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let dayNight = "AM";
//     if (hours > 12){
//         dayNight = "PM";
//         hours -= 12;
//     }
//     if (hours <10) {
//         hours = "0" + hours;
//     }
//     if (minutes <10) {
//         minutes = "0" + minutes;
//     } 
//     if (seconds < 10 ) {
//         seconds = "0" + seconds;
//     }
//     time.textContent = hours + ":" + minutes + ":" + seconds + " " + dayNight;
// }

// setInterval(time, 1000);

let hourElem = document.querySelector(".hour");
let  minElem = document.querySelector(".min");
let secElem = document.querySelector(".sec");
let ampmElem = document.querySelector(".am-pm");
let weekDayElem = document.querySelector(".week-day");
let monthsElem = document.querySelector(".month");
let dateElem = document.querySelector(".date")

setInterval(()=> {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hourElem.innerHTML = hours.toString(10).padStart(2, "0"); //mobodo 10 dan kichkina bosa uni pad qlamiz ,uni qilish uchun oldin stringa ugirvolish kere, pad da bzaga 2 tali son kere agar kam bo'p qosa yoniga 0 qo'w

  minElem.innerHTML = minutes.toString(10).padStart(2, "0");
  secElem.innerHTML = seconds.toString(10).padStart(2, "0"); // wu wartlani o'zi bn hozirgi soatga aylandi
}, 1000)

function displayAMPM() {
    let now = new Date();

    let hours = now.getHours();
    let ampm = "";
    if(hours <12) {
        ampm = "A.M."
    }else {
        ampm = "P.M."
        
    }
    ampmElem.innerHTML = ampm;
}

displayAMPM();
setInterval(displayAMPM,1000 *60*60);// 360000 har soatda

let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat" ];  // hafta kunlari 0 indeks bu sunday
(function displayWeekDay() {
    let day = days[new Date().getDay()];
    

    
    weekDayElem.innerHTML = day;
})(); // IIFE ozini ozi chaqrgani uchun qaytadan chaqirish wartmas wu un wu funksiyaaga aylantirdik



(function displayWeekDate() {
  let now = new Date();

  let date = now.getDate().toString(10).padStart(2,"0"); //nechinchi kun

  let month = (now.getMonth() + 1).toString(10).padStart(2,"0"); // qaysi oy 1 qo'wdok chunki u 0 dan beradi

  monthsElem.innerHTML = month;
  dateElem.innerHTML = date;
})(); 
