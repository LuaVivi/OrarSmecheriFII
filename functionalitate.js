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
