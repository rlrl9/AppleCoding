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
  } else if (!/\S+@\S+\.\S+/.test(document.getElementById("email").value)) {
    e.preventDefault();
    alert("이메일 형식을 지켜주세요");
  }
  if (document.getElementById("pw").value == "") {
    e.preventDefault();
    alert("비밀번호를 입력하세요");
  } else if (document.getElementById("pw").value.length < 6) {
    e.preventDefault();
    alert("비밀번호를 6자 이상 입력하세요");
  } else if (!/[A-Z]/.test(document.getElementById("pw").value)) {
    e.preventDefault();
    alert("대문자를 입력해주세요");
  }
});
var ifDark = 0;
document.getElementById("darkButton").addEventListener("click", function () {
  ifDark++;
  if (ifDark % 2 == 1) {
    //다크모드
    document.querySelector(".badge").classList.remove("bg-white");
    document.querySelector(".badge").classList.add("bg-dark");
    document.querySelector(".badge").style.color = "white";
    document.querySelector(".badge").innerHTML = "Dark 🔄";
    document.getElementById("total").classList.add("dark");
    document.querySelector(".navbar").classList.remove("navbar-light");
    document.querySelector(".navbar").classList.add("navbar-dark");
    document.querySelector(".navbar").classList.remove("bg-light");
    document.querySelector(".navbar").classList.add("bg-dark");
  } else if (ifDark % 2 == 0) {
    //라이트모드
    document.querySelector(".badge").classList.remove("bg-dark");
    document.querySelector(".badge").classList.add("bg-white");
    document.querySelector(".badge").style.color = "black";
    document.querySelector(".badge").innerHTML = "Light 🔄";
    document.getElementById("total").classList.remove("dark");
    document.querySelector(".navbar").classList.remove("navbar-dark");
    document.querySelector(".navbar").classList.add("navbar-light");
    document.querySelector(".navbar").classList.remove("bg-dark");
    document.querySelector(".navbar").classList.add("bg-light");
  }
});
initialTime = 5;
function timer() {
  initialTime--;
  document.getElementById("num").innerHTML = initialTime;
}
setTimeout(function () {
  document.querySelector(".alert").style.display = "none";
}, 5000);
setInterval(timer, 1000);
document.querySelector(".slide-2").addEventListener("click", function () {
  document.querySelector(".slide-container").style.transform =
    "translateX(-100vw)";
});
document.querySelector(".slide-3").addEventListener("click", function () {
  document.querySelector(".slide-container").style.transform =
    "translateX(-200vw)";
});
document.querySelector(".slide-1").addEventListener("click", function () {
  document.querySelector(".slide-container").style.transform =
    "translateX(0vw)";
});
var nowPic = 1; //현재보고있는 사진
document.querySelector(".prev").addEventListener("click", function () {//이전버튼
  if (nowPic > 1) {
    document.querySelector(".slide-container").style.transform =
      "translateX(" + -100 * (nowPic-2) + "vw)";
    nowPic--;
  }
});
document.querySelector(".next").addEventListener("click", function () {//다음버튼
  if (nowPic < 3) {
    document.querySelector(".slide-container").style.transform =
      "translateX(" + -100 * nowPic + "vw)";
    nowPic++;
  }
});
window.addEventListener('scroll',function(){
  if (window.scrollY>100){
    document.querySelector('.navbar-brand').style.fontSize = "20px";
  }
  else{
    document.querySelector('.navbar-brand').style.fontSize = "30px";
  }
  document.querySelector('.progress-bar').style.width = (document.querySelector('html').scrollTop / (document.querySelector('html').scrollHeight-document.querySelector('html').clientHeight)) * 100 + '%';
})
document.querySelector('.lorem').addEventListener('scroll',function(){
  var scrollAmount = document.querySelector('.lorem').scrollTop;
  var realAmount = document.querySelector('.lorem').scrollHeight;
  var eyeAmount = document.querySelector('.lorem').clientHeight;
  if(scrollAmount+eyeAmount>realAmount-1){
    alert('약관을 다 읽었습니다!');
  }
})
document.querySelector('.black-bg').addEventListener('click', function(e){
  if(e.target==document.querySelector('.black-bg')){
    document.querySelector('.black-bg').classList.remove('show-modal');
  }
  })//검은배경 누르면 모달창 닫히게
let start = 0;
let ifPress = false;
let moveX = 0;
document.querySelectorAll('.slide-box')[0].addEventListener('mousedown',function(e){
  start=e.clientX;
  ifPress=true;
})
document.querySelectorAll('.slide-box')[0].addEventListener('mousemove',function(e){
  if (ifPress){
    moveX=e.clientX - start;
    document.querySelectorAll('.slide-box')[0].style.transform = `translateX(${moveX}px)`;
  }
})
document.querySelectorAll('.slide-box')[0].addEventListener('mouseup',function(e){
  ifPress=false;
  console.log(moveX);
  if(moveX<-100){
    console.log('go');
    document.querySelector(".slide-container").style.transition =
    "all 0.5s";
    document.querySelector(".slide-container").style.transform =
    "translateX(-100vw)";
  }else{
    console.log('stop');
    // document.querySelector(".slide-container").style.transition =
    // "all 0.5s";
    document.querySelector(".slide-container").style.transform =
    "translateX(0vw)";
  }
  setTimeout(()=>{
    document.querySelector(".slide-container").style.transition =
    "none";
  },500)
})
let start_m = 0;
let ifPress_m = false;
let moveX_m = 0;
document.querySelectorAll('.slide-box')[0].addEventListener('touchstart',function(e){
  start_m=e.touches[0].clientX;
  ifPress_m=true;
})
document.querySelectorAll('.slide-box')[0].addEventListener('touchmove',function(e){
  if (ifPress_m){
    moveX_m=e.touches[0].clientX - start_m;
    document.querySelectorAll('.slide-box')[0].style.transform = `translateX(${moveX_m}px)`;
  }
})
document.querySelectorAll('.slide-box')[0].addEventListener('touchend',function(e){
  ifPress_m=false;
  console.log(moveX_m);
  if(moveX_m<-100){
    console.log('go');
    document.querySelector(".slide-container").style.transition =
    "all 0.5s";
    document.querySelector(".slide-container").style.transform =
    "translateX(-100vw)";
  }else{
    console.log('stop');
    // document.querySelector(".slide-container").style.transition =
    // "all 0.5s";
    document.querySelector(".slide-container").style.transform =
    "translateX(0vw)";
  }
  setTimeout(()=>{
    document.querySelector(".slide-container").style.transition =
    "none";
  },500)
})