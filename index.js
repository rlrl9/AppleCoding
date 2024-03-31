document
  .getElementsByClassName("navbar-toggler")[0]
  .addEventListener("click", function () {
    document.getElementsByClassName("list-group")[0].classList.toggle("show");
  });
document.getElementById("login").addEventListener("click", function () {
  document.querySelector(".black-bg").classList.add("show-modal");
});
document.getElementById("close").addEventListener("click", function () {
  document.querySelector(".black-bg").classList.remove("show-modal");
});
document.querySelector("form").addEventListener("submit", function (e) {
  if (document.getElementById("email").value == "") {
    e.preventDefault();
    alert("이메일을 입력하세요");
  }
  if (document.getElementById("pw").value == "") {
    e.preventDefault();
    alert("비밀번호를 입력하세요");
  } else if (document.getElementById("pw").value.length < 6) {
    e.preventDefault();
    alert("비밀번호를 6자 이상 입력하세요");
  }
});
var ifDark = 0;
document.getElementById("darkButton").addEventListener("click", function () {
  ifDark++;
  if (ifDark % 2 == 1) {//다크모드
    document.querySelector(".badge").classList.remove("bg-white");
    document.querySelector(".badge").classList.add("bg-dark");
    document.querySelector(".badge").style.color = "white";
    document.querySelector(".badge").innerHTML='Dark 🔄';
    document.getElementById("total").classList.add("dark");
    document.querySelector(".navbar").classList.remove("navbar-light");
    document.querySelector(".navbar").classList.add("navbar-dark");
    document.querySelector(".navbar").classList.remove("bg-light");
    document.querySelector(".navbar").classList.add("bg-dark");
  } else if (ifDark % 2 == 0) {//라이트모드
    document.querySelector(".badge").classList.remove("bg-dark");
    document.querySelector(".badge").classList.add("bg-white");
    document.querySelector(".badge").style.color = "black";
    document.querySelector(".badge").innerHTML='Light 🔄';
    document.getElementById("total").classList.remove("dark");
    document.querySelector(".navbar").classList.remove("navbar-dark");
    document.querySelector(".navbar").classList.add("navbar-light");
    document.querySelector(".navbar").classList.remove("bg-dark");
    document.querySelector(".navbar").classList.add("bg-light");
  }
});
