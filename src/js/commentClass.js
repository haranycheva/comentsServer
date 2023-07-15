export class Comment {
  constructor({ title, body } = {}) {
    this["title"] = title;
    this["body"] = body;
    this["id"] = Date.now();
  }
}
