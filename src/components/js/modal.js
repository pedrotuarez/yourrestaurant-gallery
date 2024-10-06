// JavaScript Document

export const ShowModal = (src) => {
  let modal = document.querySelector('#pg-modal');
  let img = document.querySelector('#pg-modal-img');
  modal.classList.toggle("pg-modal-open");
  img.setAttribute("src", src);
}

export const CloseModal = () => {
  let modal = document.querySelector('#pg-modal');
  modal.classList.toggle("pg-modal-open");
}