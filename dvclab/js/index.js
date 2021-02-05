let isMenuShow = false;

const menuBtnClick = function () {
  const menuBtn = document.getElementById('menuBtn');
  const menu = document.getElementById('menu');

  if(isMenuShow) {
    menu.classList.remove("d-none")
  }else {
    menu.classList.add("d-none")
  }

  isMenuShow = !isMenuShow
}