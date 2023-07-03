const modalWindow = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');

document.addEventListener('click', handleOutsideClick);

document.querySelector('.btn-modal-open').addEventListener('click', () => {
	modalWindow.classList.remove('modal_hidden');
	modalContent.classList.remove('modal__content_hidden');
})

document.querySelector('.modal__btn-close').addEventListener('click', () => {
	hideModal();
})

//close modal window on click outside of it
function handleOutsideClick(e) {
	if (e.target.classList.contains('modal')) hideModal();
}

function hideModal() {
	modalWindow.classList.add('modal_hidden');
	modalContent.classList.add('modal__content_hidden');
}
