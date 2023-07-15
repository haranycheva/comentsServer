import { getFormValues } from "./getFormValues.js"
import { createCommentCard } from "./createCommentCard.js";
import { getComment } from "./fetch.js";
import localStorage from "./localStorage.js";
import { refs } from "./refs";
import { fetchComment } from "./fetch.js";

export async function onSubmitModalForm(e){
    e.preventDefault()
    const formData = getFormValues(refs.modalForm);
    const saveData = await getComment();
    for (const elem of saveData) {
        if(localStorage.load() === elem.id){
            elem.title = formData.title
            elem.body = formData.text
            const elCard = document.querySelector(`[data-id="${elem.id}"]`)
            elCard.innerHTML = createCommentCard(elem)
            refs.modal.classList.add('is-hidden');
            fetchComment(elem, "PUT")
        }
    }
}