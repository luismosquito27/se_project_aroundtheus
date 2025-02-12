// The items property should be an array of data,
// which you must add to the page when it loads.
// The renderer property should be a function
// that creates and adds a single item to the page.

export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
    this._method = "prepend";
    this._cardElement = "cardData";
  }

  addItem(items) {
    // push the item to the container
    this._container[this._method](this._cardElement);
    this._container.append(items);
  }

  renderItems() {
    // for loop of the this._items
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
}
