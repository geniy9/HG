export default class Category {
  constructor(id, url, showroom, title, description, subcategory) {
    this.id = id;
    this.url = url;
    this.showroom = showroom;
    this.title = title;
    this.description = description;
    this.subcategory = subcategory;
  }
  static createFrom(data) {
    const {id, url, showroom, title, description, subcategory} = data;
    return new this(id, url, showroom, title, description, subcategory);
  }
}