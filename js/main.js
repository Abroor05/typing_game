const sozlar = document.querySelector(".sozlar")
const submit = document.querySelector(".submit")
const endTime = document.querySelector(".endTime")
const score = document.querySelector(".score")
const modal = document.querySelector(".modal")
const endScore = document.querySelector(".endScore")
const heightScore = document.querySelector(".heightScore")
const resultEnd = document.querySelector(".resultEnd")
const again = document.querySelector(".try")
const difficult = document.querySelector("#difficult")

let record = 0
var time = 10;
let level = localStorage.getItem("level") ? localStorage.getItem("level") : "easy";

const words = [
  "yulduz", "tovuq", "kitob", "xona", "piyola", "daraxt", "kamon", "kalam", "sham", "suv", "dost", "nur", "xalta", "lab", "yil", "qalam", "tulki", "dastur", "deyarli", "chiroy",
];



heightScore.textContent = localStorage.getItem("heightScore") ? localStorage.getItem("heightScore") : 0;

difficult.addEventListener("change", (e)=> {
    localStorage.setItem("level", e.target.value)
});

if(localStorage.getItem("level")) {
    difficult.value = localStorage.getItem("level")
}

const writeText = ()=> {
    var random1 = words[(Math.floor(Math.random()*20))]
    
    sozlar.textContent = random1
}

writeText()



submit.addEventListener("input", ()=> {
    console.log(submit.value);
    if(submit.value == sozlar.textContent) {
        submit.value = ""
        record++
        score.textContent = record
        writeText()
       if(level == "easy") {
        time = time + 6
       } else if(level == "medium") {
        time = time + 4
       } else if(level == "hard") {
        time = time + 2
       }
    }
})



var interval =  setInterval(() => {
    time--;
    endTime.textContent = time
    if(time == 0) {  
        if(heightScore.textContent < record) {
            heightScore.textContent = record
        }
        clearInterval(interval)
        modal.classList.toggle("active")
        endScore.textContent = record;
    }
    localStorage.setItem("heightScore", heightScore.textContent)
}, 1000);


again.addEventListener("click", ()=>{
    if(record.textContent > heightScore) {
        heightScore.textContent = localStorage.setItemItem("record", record)
    } else {
        heightScore.textContent = heightScore
    }
})
