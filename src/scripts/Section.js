export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item) {
    // push the item to the container
    this._container.prepend(item);
  }

  renderItems() {
    // for loop of the this._items
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
}
