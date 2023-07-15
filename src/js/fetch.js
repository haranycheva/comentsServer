const BASE__URL = 'http://localhost:3000/coments';
export function  fetchComment(comment, httpMethod) { 
  const options = {
    method: `${httpMethod}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(comment),
  };
  let url = BASE__URL;
  if(httpMethod === "DELETE" || httpMethod === "PUT"){
    url += `/${comment.id}`
  }
  return fetch(`${url}`, options).then(res => res.json());
}

export function getComment(){
  return fetch(`${BASE__URL}`).then(res => res.json())
}

// addPost({
//   userId: 2,
//   title: 'nya',
//   body: 'test new',
// }).then(res => console.log(res));
