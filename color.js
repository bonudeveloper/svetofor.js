
function colorRun() {
    let random = Math.random();
    let str = random.toString(16);
    let cut = str.slice(2, 8);
    let add = "#";
    let desimal = add + cut;
    let body = document.querySelector("body");
    body.style.backgroundColor = desimal;
    
    document.querySelector("h1").innerHTML = desimal;
}

setInterval(colorRun, 1000);