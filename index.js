const zones = document.querySelectorAll(".zone");
  const length = zones.length;

  const score = document.querySelector("#score > span");
  let count = 0;

  zones.forEach((e) => {
    e.addEventListener("click", () => {
      //If ground has active class which means it has mole
      //So increase the count
      if (e.classList.contains("active")) {
        count++;
        score.innerHTML = count;
      }
    });
  });

  var interval = setInterval(() => {
    //Generate a random number
    const random = Math.floor(Math.random() * length);

    //Remove the active class from every ground
    zones.forEach((e) => {
      e.classList.remove("active");
    });

    //Add the active class to random ground
    zones[random].classList.add("active");
  }, 800);