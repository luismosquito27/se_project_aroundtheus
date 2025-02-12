// The items property should be an array of data,
// which you must add to the page when it loads.
// The renderer property should be a function
// that creates and adds a single item to the page.

export default class Section {
  constructor({ item, renderer }, containerSelector) {
    this._item = item;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item) {
    // push the item to the container
    this._container.append(item);
  }

  renderItems() {
    // for loop of the this._items
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
}
