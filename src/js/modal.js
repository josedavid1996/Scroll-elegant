const d = document;
const $columns = d.querySelector(".columns ");
const $scroll_h2 = d.querySelectorAll(".scroll_h2");
const $footer = d.querySelectorAll(".wp-block-group");
const $scroll_icon = d.querySelector(".scroll__icon-arrow");
const $img = d.createElement("img");
const $figure = d.createElement("div");
const $title = d.createElement("h3");

d.addEventListener("click", (e) => {
  if (e.path[1].classList.contains("column__figure")) {
    $columns.classList.add("transladar");

    $img.setAttribute("src", e.path[0].attributes[3].nodeValue);
    $title.textContent = e.path[0].nextElementSibling.innerText;
    $figure.classList.add("fixed");
    $figure.appendChild($title);
    $figure.appendChild($img);

    d.body.appendChild($figure);
    $scroll_h2[0].classList.add("none");
    $scroll_h2[1].classList.add("none");

    $footer[0].classList.replace("none", "block");
    $scroll_icon.classList.replace("none", "block");
    console.log(e.path[1].classList.contains("column__figure"));
  }
  if (e.path[1].classList.contains("scroll__icon-arrow")) {
    $columns.classList.remove("transladar");
    $scroll_h2[0].classList.remove("none");
    $scroll_h2[1].classList.remove("none");
    $footer[0].classList.replace("block", "none");
    $scroll_icon.classList.replace("block", "none");
    d.body.removeChild($figure);
  }
});
