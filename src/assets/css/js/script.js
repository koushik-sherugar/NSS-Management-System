function depart_dropdown() {
  document.getElementById("depart").classList.add("show");
}

function admin_eye() {
  var x = document.getElementById("myinput1");
  var y = document.getElementById("hide1");
  var z = document.getElementById("hide2");
  if (x.type === "password") {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }
}

var x = document.getElementById("login1");
var y = document.getElementById("login2");
var z = document.getElementById("signin-btn");
function login2() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}
function login1() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0px";
}
function pat_eye() {
  var a = document.getElementById("myinput1");
  var b = document.getElementById("hide1");
  var c = document.getElementById("hide2");
  if (a.type === "password") {
    a.type = "text";
    b.style.display = "block";
    c.style.display = "none";
  } else {
    a.type = "password";
    b.style.display = "none";
    c.style.display = "block";
  }
}
function doc_eye() {
  var a1 = document.getElementById("myinput2");
  var b2 = document.getElementById("hide3");
  var c3 = document.getElementById("hide4");
  if (a1.type === "password") {
    a1.type = "text";
    b2.style.display = "block";
    c3.style.display = "none";
  } else {
    a1.type = "password";
    b2.style.display = "none";
    c3.style.display = "block";
  }
}
