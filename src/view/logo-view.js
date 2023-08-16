import { createElement } from '../render.js';

function createLogoTemplate() {
  return '<img class="page-header__logo" src="img/logo.png" width="42" height="42" alt="Trip logo">';
}

export default class HeaderView {
  getTemplate() {
    return createLogoTemplate();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
