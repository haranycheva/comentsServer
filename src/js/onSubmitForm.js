import { refs } from "./refs.js"
import { addComment } from "./addComment.js"

export function onSubmitForm(e){
    e.preventDefault()
    addComment()
    refs.commentForm.reset()
}
