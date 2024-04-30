document.querySelector(".list").addEventListener("click", function (e) {
  tabOpen(parseInt(e.target.dataset.id));
});
function tabOpen(i) {
  document.querySelectorAll(".tab-button").forEach(function (btn) {
    btn.classList.remove("orange");
  });
  document.querySelectorAll(".tab-button")[i].classList.add("orange");
  document.querySelectorAll(".tab-content").forEach(function (content) {
    content.classList.remove("show");
  });
  document.querySelectorAll(".tab-content")[i].classList.add("show");
}
var formSelects = document.querySelectorAll(".form-select");
var shirts=[95,100,105];
var pants=[28,29,30];
formSelects[0].addEventListener("click", function (e) {
  var value = e.currentTarget.value;
  var formSelect2 = formSelects[1];
  if (value === '셔츠') {
    formSelect2.classList.remove("form-hide");
    formSelect2.innerHTML='';
    shirts.forEach(function(a){
      formSelect2.insertAdjacentHTML('beforeend', `<option>${a}</option>`);
    })  } else if (value === '모자') {
    formSelect2.classList.add("form-hide");
  } else if (value === '바지'){
    formSelect2.classList.remove("form-hide");
    formSelect2.innerHTML='';
    pants.forEach(function(a){
      formSelect2.insertAdjacentHTML('beforeend', `<option>${a}</option>`);
    })
  }
});