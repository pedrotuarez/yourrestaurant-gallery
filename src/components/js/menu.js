// Display Menu

const ShowMenu = () => {
  let btnMenu = document.getElementById('pybtn-menu');
  let menu = document.getElementById('pymenu');

  btnMenu.firstElementChild.classList.toggle("py-none");
  btnMenu.lastElementChild.classList.toggle("py-none");
  menu.classList.toggle('py-visible');

  document.addEventListener("click", (e)=>{
    if(!e.target.matches(".py-menu a")) return false;
  
    btnMenu.firstElementChild.classList.remove("py-none");
    btnMenu.lastElementChild.classList.add("py-none");
    menu.classList.remove('py-visible');
  });
}

export default ShowMenu;