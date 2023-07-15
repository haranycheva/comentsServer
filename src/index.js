import { refs } from "./js/refs.js"
import { onSubmitForm } from "./js/onSubmitForm.js"
import { populateMarkup } from "./js/populateMarkup.js"
import { clickOnBtn } from "./js/clickOnBtn.js"
import { onSubmitModalForm } from "./js/onSubmitModalForm.js"

refs.commentList.addEventListener("click", clickOnBtn)
refs.commentForm.addEventListener("submit", onSubmitForm)
refs.modalForm.addEventListener("submit", onSubmitModalForm)

populateMarkup()