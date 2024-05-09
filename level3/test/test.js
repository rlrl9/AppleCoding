/**********
 * 상품진열 *
 ***********/
fetch("store.json")
  .then((response) => response.json())
  .then((data) => {
    //원본데이터 다른데서 많이 쓰니까 변수에 보관
    products = data.products;

    //페이지로드시 json 데이터가져와서 메인페이지 내용 만들기
    show(data.products);
  })
  .catch((error) => console.error("Fetch error:", error));
/********************
 * 상품 보여주는 함수 *
 ********************/
function show(data) {
  data.forEach((a, i) => {
    document.querySelector(".product-list").insertAdjacentHTML(
      "beforeend",
      `
          <div class="col-md-3">
            <div class="item" draggable="true" data-id="${a.id}">
              <img src="${a.photo}">
              <h4>${a.title}</h4>
              <h4>${a.brand}</h4>
              <p>가격 : ${a.price}</p>
              <button class="add" data-id="${a.id}">담기</button>
            </div>
          </div>`
    );
  });
}
/**********
 * 상품검색 *
 ***********/
document.getElementById("search").addEventListener("input", function () {
  let sText = this.value;
  document.querySelector(".product-list").innerHTML = "";
  let searchData = products.filter((a) => {
    return a.title.includes(sText) || a.brand.includes(sText);
  });
  show(searchData);
  // .product-list 클래스를 가진 요소를 선택합니다.
  var productElements = document.querySelectorAll(".product-list h4");

  // 각 요소에 대해 반복합니다.
  productElements.forEach(function (a) {
    var title = a.innerHTML;

    // 검색어를 찾아서 강조합니다.
    title = title.replace(
      sText,
      `<span style="background : yellow">${sText}</span>`
    );

    // 요소의 innerHTML을 변경하여 강조된 검색어가 포함된 제목을 표시합니다.
    a.innerHTML = title;
  });
});
/****************
 * 드래그 앤 드롭 *
 ****************/
