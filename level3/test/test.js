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
            <div class="item" draggable="true" ondragstart="drag(event)" id="item-${a.id}">
              <img src="${a.photo}" draggable="false">
              <h4 class="title">${a.title}</h4>
              <h4 class="brand">${a.brand}</h4>
              <p class="price">가격 : ${a.price}</p>
              <button class="add" data-id="${a.id}" onclick="handleDrop(event)">담기</button>
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
var finalPrice = 0;
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.setData("img", ev.target.querySelector("img").src);
  ev.dataTransfer.setData("title", ev.target.querySelector(".title").innerText);
  ev.dataTransfer.setData("brand", ev.target.querySelector(".brand").innerText);
  ev.dataTransfer.setData("price", ev.target.querySelector(".price").innerText);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  console.log(data);
  var imgData = ev.dataTransfer.getData("img");
  var titleData = ev.dataTransfer.getData("title");
  var brandData = ev.dataTransfer.getData("brand");
  var priceData = ev.dataTransfer.getData("price");

  if (ev.target.classList.contains("basket")) {
    const existingItem = ev.target.querySelector(`#${data}`);
    if (existingItem) {
      let countElement = existingItem.querySelector(".count");
      let number = parseInt(countElement.value);
      number += 1;
      countElement.value = number;
      finalPrice += parseInt(priceData.substr(5));
    } else {
      let number = 1;
      ev.target.insertAdjacentHTML(
        "beforeend",
        `
                <div class="col-md-3 white-bg" id="${data}">
                  <div>
                    <img src="${imgData}" alt="Product Image">
                    <h4 class="title">${titleData}</h4>
                    <h4 class="brand">${brandData}</h4>
                    <p class="price">${priceData}</p>
                    <p>수량: <input type="number" class="count" value="${number}" min="1"></p>
                    
                  </div>
                </div>`
      );
      finalPrice += parseInt(priceData.substr(5));
    }
  }
  document.querySelector(".final-price").innerText = finalPrice;
}
function handleDrop(ev) {
  ev.preventDefault();
  var target = ev.target.parentElement;
  var data = target.id;
  console.log(data);
  var imgData = target.querySelector("img").src;
  var titleData = target.querySelector(".title").innerText;
  var brandData = target.querySelector(".brand").innerText;
  var priceData = target.querySelector(".price").innerText;
  console.log(imgData);
  const existingItem = document
    .querySelector(".basket")
    .querySelector(`#${data}`);
  console.log(existingItem);
  if (existingItem) {
    let countElement = existingItem.querySelector(".count");
    let number = parseInt(countElement.value);
    number += 1;
    countElement.value = number;
    finalPrice += parseInt(priceData.substr(5));
  } else {
    let number = 1;
    document.querySelector(".basket").insertAdjacentHTML(
      "beforeend",
      `
                <div class="col-md-3 white-bg" id="${data}">
                  <div>
                    <img src="${imgData}" alt="Product Image">
                    <h4 class="title">${titleData}</h4>
                    <h4 class="brand">${brandData}</h4>
                    <p class="price">${priceData}</p>
                    <p>수량: <input type="number" class="count" value="${number}" min="1"></p>
                    
                  </div>
                </div>`
    );
    finalPrice += parseInt(priceData.substr(5));
  }
  const newItem = document.querySelector(`#${data} .count`);
  newItem.addEventListener("blur", update);
  update();
  document.querySelector(".final-price").innerText = finalPrice;
}
function update() {
  finalPrice = 0;
  document.querySelectorAll(".basket .col-md-3").forEach((item) => {
    const price = parseInt(
      item.querySelector(".price").innerText.replace("가격 : ", "")
    );
    const count = parseInt(item.querySelector(".count").value);
    finalPrice += price * count;
  });
  document.querySelector(".final-price").innerText = finalPrice;
}
/**********
 * 상품구매 *
 ***********/
//입력폼
function buyItem() {
  document.querySelector(".modal1").style.display = "block";
}
document.querySelector(".modal1 .close").addEventListener("click", function () {
  document.querySelector(".modal1").style.display = "none";
});

//구매 영수증 이미지 표시
document.querySelector(".show-receipt").addEventListener("click", function () {
  document.querySelector(".modal1").style.display = "none";
  document.querySelector(".modal2").style.display = "block";
  var canvas = document.getElementById("canvas");
  var c = canvas.getContext("2d");
  c.font = "20px dotum";
  finalPrice = 0;
  var i = 1;
  document.querySelectorAll(".basket .col-md-3").forEach((item) => {
    const title = item.querySelector(".title").innerText;
    const price = parseInt(
      item.querySelector(".price").innerText.replace("가격 : ", "")
    );
    const count = parseInt(item.querySelector(".count").value);
    finalPrice += price * count;
    c.fillText(title, 30, i * 70 - 20);
    c.fillText("가격 : " + price, 30, i * 70 + 5);
    c.fillText("수량 : " + count, 30, i * 70 + 30);
    i++;
  });
  document.querySelector(".final-price").innerText = finalPrice;
  c.fillText("최종 가격 : " + finalPrice, 30, i * 70 - 20);
});

//영수증 닫기
document.querySelector(".modal2 .close").addEventListener("click", function () {
  document.querySelector(".modal2").style.display = "none";
  var canvas = document.getElementById("canvas");
  var c = canvas.getContext("2d");
  c.clearRect(0, 0, canvas.width, canvas.height);
});
