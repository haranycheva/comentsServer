export function getFormValues(form){
    const formData = new FormData(form)
    const data = []
    formData.forEach((v, k) => data[k] = v)
    return data;
}