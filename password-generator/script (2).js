let slider = document.querySelector("#slider");
let button = document.querySelector("#button");
let size = document.querySelector("#size");
let password = document.querySelector("#password");

size.innerHTML = slider.value;

slider.oninput = function () {
  size.innerHTML = this.value;
};

function generate() {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&()[]{}<>-_=+";
  let update = "";
  for (let i = 0; i < slider.value; i++) {
    update += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  password.innerHTML = update;
}
