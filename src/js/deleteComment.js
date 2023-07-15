import { refs } from "./refs.js";
import { getComment } from "./fetch.js";
import { fetchComment } from "./fetch.js";

export async function deleteCard(e){
    const saveData = await getComment();
    for(const elem of saveData){
        if(e.target.closest(`[data-id="${elem.id}"]`)){
            e.target.closest(".card").style.display = "none";
            fetchComment(elem, "DELETE")
        }
    };
}