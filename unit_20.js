



let out11 = document.querySelector(".out-11");
let button = document.querySelectorAll(".keyboard");
const change = {
  " ": "space",
  Control: "ctrl",
};

function t11(event) {
  let key = event.key;
  console.log(key);
  button.forEach((item) => item.classList.remove("active"));
  if (change[key] !== undefined) {
    key = change[key];
  }

  let activeButton = document.querySelector(`.keyboard[data="${key}"]`);
  if (activeButton) {
    activeButton.classList.add("active");
  }
}

document.querySelector(".i-11").onkeydown = t11;