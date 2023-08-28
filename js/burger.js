let button=document.querySelector(".burg_img");
let burgermenu = document.querySelector(".elem");
let burger = document.querySelector(".header_listmob");
let item = document.querySelector(".header_list_item");
if (button) {
  button.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    burgermenu.classList.toggle("active");
    button.classList.toggle("active");
    burger.classList.toggle("active");
    item.classList.toggle("active");
    burger.setAttribute("aria-expanded", true);
    item.setAttribute("aria-hidden", false);
    if(burger == document.querySelector(".header_listburg.active")){
      burgermenu.setAttribute("aria-expanded", true);
      burger.setAttribute("aria-hidden", false);
      item.style.maxHeight = item.scrollHeight + "px";
    }else
    burgermenu.setAttribute("aria-expanded", false);
    burger.setAttribute("aria-hidden", true);
    item.style.maxHeight = null;
  });
}
