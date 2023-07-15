const KEY = "changed";


function save(value){
    const valueJSON = JSON.stringify(value);
    return localStorage.setItem(KEY, valueJSON)
}

function load(){
    const saveLocal = localStorage.getItem(KEY) 
    ? JSON.parse(localStorage.getItem(KEY))
    : undefined;
    return saveLocal;
}

export default{
    save,
    load,
}