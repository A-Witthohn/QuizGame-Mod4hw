const display = document.getElementById("HS-Display")
const allScores = JSON.parse(localStorage.getItem("allScores")) || []
Object.entries(allScores).sort((a, b) => b[1] - a[1])

for (i = 0; i < allScores.length; i++) {
  Object.entries(allScores).sort((a, b) => b[1] - a[1])
  var p = document.createElement("p")
  p.textContent = `${allScores[i].initials} - ${allScores[i].finalScore} pts`
  display.appendChild(p);
}