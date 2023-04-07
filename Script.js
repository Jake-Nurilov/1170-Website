function checkForm() {
  const Inputington = document.getElementById("Formington").value;
  if (Inputington === "yes" || Inputington== "Yes" || Inputington === "YES") {
    document.getElementById("message").innerHTML = "Hi hello hi hey hello hi";
  } else if (Inputington === "no" || Inputington === "No" || Inputington === "NO") {
    document.getElementById("message").innerHTML = "I KNOW WHO YOU ARE";
  } else {
    document.getElementById("message").innerHTML = "Pretty simple yes or no question man kinda cringe";
  }
}
function reset() {
  document.getElementById("Formington").value = "";
  document.getElementById("message").innerHTML = "";
}

if ("Notification" in window){
  alert("Welcome")
}

function closeWindow() {
  if (confirm("Are you sure you want to close this window?")) {
    alert("Don't leave me")
  }
}

let Color = 0;
let colors = ["cream", "darkblue", "charcoal"];
function changeBackgroundColor() {
  document.body.classList.remove(colors[Color]);
  Color = (Color + 1) % colors.length;
  document.body.classList.add(colors[Color]);
}
let bgChange = document.querySelector("#bgChange");
bgChange.addEventListener("click", changeBackgroundColor);



/* splash */
window.addEventListener('load', function() {
  const splash = document.querySelector('.splash-container');
  const enterBtn = document.querySelector('#enter-website');
  enterBtn.addEventListener('click', function() {
    splash.remove();
  });
});