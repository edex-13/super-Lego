const btnsModal = document.querySelectorAll('.footer__item');
const btnCloseModal = document.querySelector('.modal__header--close');
const modal = document.querySelector('.modal');
btnsModal.forEach((btnsModal) => {
   btnsModal.addEventListener('click', () => {
      modal.classList.remove('modal-hidden');
      modal.classList.add('modal-visible');
   });
});
btnCloseModal.addEventListener('click', () => {
   modal.classList.remove('modal-visible');
   modal.classList.add('modal-hidden');
});
