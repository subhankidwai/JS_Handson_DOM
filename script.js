let c = document.getElementById("text")
console.log(c.innerText)

let x = document.getElementsByTagName("h1")
console.log(x[0].innerText)

let b=document.getElementsByClassName("box")
console.log(b[0].innerText)

let abc=document.getElementById("heading")
abc.addEventListener("click", function(){
    abc.innerText="Hello World"
})

// ----------------- Q.5 ---------------------------

let boxElement=document.getElementById("parent")
let flexBtn=document.getElementById("c-btn")

flexBtn.addEventListener("click", function(){
    boxElement.style.flexDirection="column"
})

// -------------------- Q.7 -----------------------

let a=document.getElementById("heading1")
a.addEventListener("click",function(){
    a.style.color="red"
})

// ------------------------ Q . 8 ------------------------

let ab=document.getElementById("p1")
let bcd=document.getElementById("btn2")

bcd.addEventListener("click", function(){
    ab.innerText="Welcome to Elevation Academy"
})

// ------------------------ Q . 9 ----------------------

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

// ----------------------- Q . 10 ------------------

let y=document.getElementById("year")
let z=document.getElementById("output")

y.addEventListener("change", function(event){
    z.innerText=event.target.selectedOptions[0].text;
})

