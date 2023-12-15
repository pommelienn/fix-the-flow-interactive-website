function changeButton() {
    var knop = document.getElementById('mijnKnop');

    var groen = knop.style.backgroundColor === "green";
  
    if (groen) {
        knop.style.backgroundColor = "";
        knop.innerHTML = "Voeg toe aan lijst ";

    } else {
        knop.style.backgroundColor = "green";
        knop.innerHTML = "Toegevoegd";
    }
  }
  
