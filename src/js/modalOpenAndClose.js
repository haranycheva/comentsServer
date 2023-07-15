import { refs } from './refs.js';
import { getComment } from './fetch.js';
import localStorage from './localStorage.js';

export function closeModal(e) {
  if (e.target.closest(".modal-my")) {
    return;
  }
  refs.modal.classList.add('is-hidden');
  refs.modal.removeEventListener('click', closeModal);
}

export async function openModal(e) {
  refs.modal.classList.remove('is-hidden');
  const saveData = await getComment();
  for (const elem of saveData) {
    if (e.target.closest(`[data-id="${elem.id}"]`)) {
      const modalFormEls = refs.modalForm.elements;
      modalFormEls.title.value = elem.title;
      modalFormEls.text.value = elem.body;
      refs.modal.addEventListener("click", closeModal)
      localStorage.save(elem.id)
    }
  }
}
