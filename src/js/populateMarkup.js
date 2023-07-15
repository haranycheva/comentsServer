import { getComment } from "./fetch.js"
import { createCommentCard } from "./createCommentCard.js"
import { refs } from "./refs.js"


export async function populateMarkup(){
    const saveData = await getComment()
    const commentCards = saveData.map(comment => createCommentCard(comment))
    refs.commentList.insertAdjacentHTML("beforeend", commentCards.join(""))
}