const t={commentForm:document.forms["comment-form"],commentList:document.querySelector(".comments-list"),modal:document.querySelector(".back-modal-my"),modalForm:document.forms["modal-form"]};function e(t){const e=new FormData(t),n=[];return e.forEach(((t,e)=>n[e]=t)),n}class n{constructor({title:t,body:e}={}){this.title=t,this.body=e,this.id=Date.now()}}function o(){const o=e(t.commentForm);return new n({title:o.title,body:o.body})}function a(t){return`<li class="card" style="width: 18rem" data-id="${t.id}">\n    <div class="card-body">\n      <h5 class="card-title">${t.title}</h5>\n      <p class="card-text">\n      ${t.body}\n      </p>\n      <ul class="btn-list">\n        <button type="button" href="#" class="btn btn-primary change">\n          change\n        </button>\n        <button type="button" href="#" class="btn btn-primary delete">\n          delete\n        </button>\n      </ul>\n    </div>\n  </li>`}function c(t,e){const n={method:`${e}`,headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)};let o="http://localhost:3000/coments";return"DELETE"!==e&&"PUT"!==e||(o+=`/${t.id}`),fetch(`${o}`,n).then((t=>t.json()))}function s(){return fetch("http://localhost:3000/coments").then((t=>t.json()))}function i(){const e=o();if(!e.title||!e.body)return void alert("enter the comment detailst");const n=a(e);t.commentList.insertAdjacentHTML("beforeend",n),c(e,"POST")}async function d(t){const e=await s();for(const n of e)t.target.closest(`[data-id="${n.id}"]`)&&(t.target.closest(".card").style.display="none",c(n,"DELETE"))}var r={save:function(t){const e=JSON.stringify(t);return localStorage.setItem("changed",e)},load:function(){return localStorage.getItem("changed")?JSON.parse(localStorage.getItem("changed")):void 0}};function l(e){e.target.closest(".modal-my")||(t.modal.classList.add("is-hidden"),t.modal.removeEventListener("click",l))}async function m(e){t.modal.classList.remove("is-hidden");const n=await s();for(const o of n)if(e.target.closest(`[data-id="${o.id}"]`)){const e=t.modalForm.elements;e.title.value=o.title,e.text.value=o.body,t.modal.addEventListener("click",l),r.save(o.id)}}t.commentList.addEventListener("click",(async function(t){"BUTTON"===t.target.nodeName&&(t.target.classList.contains("delete")&&d(t),t.target.classList.contains("change")&&m(t))})),t.commentForm.addEventListener("submit",(function(e){e.preventDefault(),i(),t.commentForm.reset()})),t.modalForm.addEventListener("submit",(async function(n){n.preventDefault();const o=e(t.modalForm),i=await s();for(const e of i)if(r.load()===e.id){e.title=o.title,e.body=o.text;document.querySelector(`[data-id="${e.id}"]`).innerHTML=a(e),t.modal.classList.add("is-hidden"),c(e,"PUT")}})),async function(){const e=(await s()).map((t=>a(t)));t.commentList.insertAdjacentHTML("beforeend",e.join(""))}();
//# sourceMappingURL=index.a60d5faa.js.map
