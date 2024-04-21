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
