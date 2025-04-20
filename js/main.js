const sozlar = document.querySelector(".sozlar");
const submit = document.querySelector(".submit");
const endTime = document.querySelector(".endTime");
const score = document.querySelector(".score");
const modal = document.querySelector(".modal");
const endScore = document.querySelector(".endScore");
const heightScore = document.querySelector(".heightScore");
const resultEnd = document.querySelector(".resultEnd");
const again = document.querySelector(".try");
const difficult = document.querySelector("#difficult");

let record = 0;
var time = 10;
let level = localStorage.getItem("level")
  ? localStorage.getItem("level")
  : "easy";

const words = [
  "kitob",
  "qalam",
  "daftar",
  "maktab",
  "kurs",
  "dars",
  "uy",
  "bosh",
  "qo'l",
  "ko'z",
  "quloq",
  "burun",
  "til",
  "tish",
  "yuz",
  "bel",
  "oyoq",
  "bilak",
  "tizza",
  "tovon",
  "qish",
  "bahor",
  "yoz",
  "kuz",
  "suv",
  "yer",
  "havo",
  "osmon",
  "quyosh",
  "oy",
  "yulduz",
  "tog",
  "daryo",
  "ko'l",
  "daraxt",
  "shamol",
  "yomgir",
  "qor",
  "namlik",
  "issiq",
  "qaychi",
  "pichoq",
  "qozon",
  "tova",
  "stol",
  "stul",
  "kursi",
  "karavot",
  "divan",
  "gilam",
  "deraza",
  "eshik",
  "devor",
  "pol",
  "shift",
  "oyna",
  "chiroq",
  "parda",
  "sandiq",
  "javon",
  "telefon",
  "kompyuter",
  "planshet",
  "noutbuk",
  "klaviatura",
  "sichqoncha",
  "monitor",
  "printer",
  "kamera",
  "zaryad",
  "kitobxona",
  "kutubxona",
  "sinfxona",
  "oshxona",
  "yotoqxona",
  "mehmonxona",
  "tashqarida",
  "ichkarida",
  "yuqorida",
  "pastda",
  "tez",
  "sekin",
  "katta",
  "kichik",
  "yaxshi",
  "yomon",
  "yangi",
  "eski",
  "yuqori",
  "past",
  "chap",
  "on",
  "ong",
  "yaqin",
  "uzoq",
  "kop",
  "kam",
  "ertalab",
  "kechqurun",
  "tunda",
  "hozir",
  "keyin",
  "oldin",
  "har doim",
  "hech qachon",
  "ba'zan",
  "tez-tez",
  "kamdan-kam",
  "birdan",
  "asta",
  "bola",
  "qiz",
  "ogil",
  "ota",
  "ona",
  "aka",
  "uka",
  "opa",
  "singil",
  "bobo",
  "buvi",
  "dost",
  "dushman",
  "sinfdosh",
  "kursdosh",
  "mahalla",
  "qoshni",
  "rahbar",
  "ustoz",
  "oquvchi",
  "kitobxon",
  "haydovchi",
  "yolovchi",
  "ishchi",
  "rahbar",
  "direktor",
  "boshliq",
  "ishxona",
  "kasalxona",
  "apoteka",
  "bozor",
  "dok",
  "sup",
  "taxta",
  "qop",
  "chamadon",
  "sumka",
  "quti",
  "paket",
  "yopiq",
  "ochiq",
  "qattiq",
  "yumshoq",
  "toza",
  "iflos",
  "togri",
  "egri",
  "tekis",
  "baland",
  "pasti",
  "tezlik",
  "vazn",
  "balandlik",
  "chuqurlik",
  "uzunlik",
  "kenglik",
  "katta",
  "kichkina",
  "yorug",
  "soya",
  "sinf",
  "fan",
  "matematika",
  "fizika",
  "kimyo",
  "biologiya",
  "tarix",
  "geografiya",
  "adabiyot",
  "til",
  "ingliz",
  "rus",
  "arab",
  "nemis",
  "fransuz",
  "xitoy",
  "yapon",
  "koreys",
  "hind",
  "turk",
  "uxlamoq",
  "turmoq",
  "organmoq",
  "yozmoq",
  "oqimoq",
  "kormoq",
  "eshitmoq",
  "gapirmoq",
  "ketmoq",
  "kelmoq",
];

heightScore.textContent = localStorage.getItem("heightScore")
  ? localStorage.getItem("heightScore")
  : 0;

difficult.addEventListener("change", (e) => {
  localStorage.setItem("level", e.target.value);
});

if (localStorage.getItem("level")) {
  difficult.value = localStorage.getItem("level");
}

const writeText = () => {
  var random1 = words[Math.floor(Math.random() * words.length)];

  sozlar.textContent = random1;
};

writeText();

submit.addEventListener("input", () => {
  console.log(submit.value);
  if (submit.value == sozlar.textContent) {
    submit.value = "";
    record++;
    score.textContent = record;
    writeText();
    if (level == "easy") {
      time = time + 6;
    } else if (level == "medium") {
      time = time + 4;
    } else if (level == "hard") {
      time = time + 2;
    }
  }
});

var interval = setInterval(() => {
  time--;
  endTime.textContent = time;
  if (time == 0) {
    if (heightScore.textContent < record) {
      heightScore.textContent = record;
    }
    clearInterval(interval);
    modal.classList.toggle("active");
    endScore.textContent = record;
  }
  localStorage.setItem("heightScore", heightScore.textContent);
}, 1000);

again.addEventListener("click", () => {
  if (record.textContent > heightScore) {
    heightScore.textContent = localStorage.setItemItem("record", record);
  } else {
    heightScore.textContent = heightScore;
  }
});
