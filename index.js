const zones = document.querySelectorAll(".zone");
const length = zones.length;

const score = document.querySelector("#score > span");
let count = 0;

//function to start game when button is clicked
function startGame(){

//create click event for when mole is clicked
  zones.forEach((e) => {
    e.addEventListener("click", () => {
      //increase score if zone is clicked when a mole is there
      if (e.classList.contains("active")) {
        count++;
        score.innerHTML = count;
        //make mole disspear if clicked
        e.classList.remove('active')
      }
    });
  });

  var interval = setInterval(() => {
    //Generate a random number
    const random = Math.floor(Math.random() * length);
    
    //Remove the active class from every zone
    zones.forEach((e) => {
    e.classList.remove("active");
    });
   
    zones[random].classList.add("active");
    } , 900);
}

function endGame(){
  window.location.reload();
}