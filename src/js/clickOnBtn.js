import { deleteCard } from "./deleteComment.js";
import { openModal } from "./modalOpenAndClose.js";

export async function clickOnBtn(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  if(e.target.classList.contains("delete")){
    deleteCard(e)
  }
  if(e.target.classList.contains("change")){
    openModal(e)
  }
}
