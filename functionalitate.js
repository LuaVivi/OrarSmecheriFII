const weekday = ["duminica","luni","marti","miercuri","joi","vineri","sambata"];

const d = new Date();
let day = weekday[d.getDay()];

document.getElementById(day).style.backgroundColor = "#d6b3ea";


function rearrangeOnPortrait() {
    if (window.screen.width < window.screen.height) {
		  document.getElementById(day).style.width = "100%";
		  
		  
		  
    } else {
      document.getElementById(day).style.width = "20%";
    }
}

window.addEventListener("load", rearrangeOnPortrait);
window.addEventListener("resize", rearrangeOnPortrait);

let infoElements = document.getElementsByClassName("infoa");

for (let i = 0; i < infoElements.length; i++) {
  infoElements[i].onclick = function () {
    window.open("https://liis.ro/hosted/activitati/2013/laboratoare/labs.pdf", "_blank");
  };
}
