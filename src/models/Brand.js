export default class Brand {
  constructor(id, url, name, parent, subparent, content, website) {
    this.id = id;
    this.url = url;
    this.name = name;
    this.parent = parent;
    this.subparent = subparent;
    this.content = content;
    this.website = website;
  }
  static createFrom(data) {
    const {id, url, name, parent, subparent, content, website} = data;
    return new this(id, url, name, parent, subparent, content, website);
  }
}