import { createComment } from "./createComment.js"
import { createCommentCard } from "./createCommentCard.js";
import { refs } from "./refs.js";
import { fetchComment } from "./fetch.js";

export function addComment(){
    const newComment = createComment();
    if (!newComment.title || !newComment.body){
        alert("enter the comment detailst")
        return
    }
    const newCommentCard = createCommentCard(newComment)
    refs.commentList.insertAdjacentHTML("beforeend", newCommentCard)
    fetchComment(newComment, "POST")
}