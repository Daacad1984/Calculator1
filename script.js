const loginBox = document.getElementById("loginBox");
const calcBox = document.getElementById("calcBox");
const adminBox = document.getElementById("adminBox");
const display = document.getElementById("display");
const loginCountEl = document.getElementById("loginCount");

let logins = localStorage.getItem("logins") || 0;

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (!user || !pass) {
    alert("Fadlan buuxi dhammaan meelaha");
    return;
  }

  logins++;
  localStorage.setItem("logins", logins);

  loginBox.classList.add("hidden");

  if (user === "admin" && pass === "1234") {
    adminBox.classList.remove("hidden");
    loginCountEl.textContent = logins;
  } else {
    calcBox.classList.remove("hidden");
  }
}

function logout() {
  calcBox.classList.add("hidden");
  adminBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
}

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    alert("Xisaab qalad ah");
  }
}
