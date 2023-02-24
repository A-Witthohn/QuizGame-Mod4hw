const display = document.getElementById("HS-Display")

const allScores = JSON.parse(localStorage.getItem("allScores"))||[]
allScores.sort()
allScores.reverse()
for (i=0; i < allScores.length; i++){
    console.log(allScores)
    var p = document.createElement("p")
     p.textContent=`${allScores[i].initials}: ${allScores[i].finalScore}`
  console.log(allScores[i].initials)
    display.appendChild(p);
}