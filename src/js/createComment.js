import { refs } from "./refs.js";
import { getFormValues } from "./getFormValues.js";
import { Comment } from "./commentClass.js";

export function createComment(){
    const data = getFormValues(refs.commentForm)
    const comment = new Comment({title: data.title, body: data.body})
    return comment;
}