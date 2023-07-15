export function createCommentCard(comment) {
  return `<li class="card" style="width: 18rem" data-id="${comment.id}">
    <div class="card-body">
      <h5 class="card-title">${comment.title}</h5>
      <p class="card-text">
      ${comment.body}
      </p>
      <ul class="btn-list">
        <button type="button" href="#" class="btn btn-primary change">
          change
        </button>
        <button type="button" href="#" class="btn btn-primary delete">
          delete
        </button>
      </ul>
    </div>
  </li>`;
}
