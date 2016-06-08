import EventEmitter from 'events';

const CLICK_OUTSIDE_EVENT = 'CLICK_OUTSIDE_EVENT';

class ClickOutsideClass extends EventEmitter {

  constructor() {
    super();
    window.addEventListener('click', this.clickOutside.bind(this))
  }

  addClickListener(callback) {
    this.on(CLICK_OUTSIDE_EVENT, callback);
  }

  removeClickListener(callback) {
    this.removeListener(CLICK_OUTSIDE_EVENT, callback);
  }

  clickOutside(e) {
    this.emit(CLICK_OUTSIDE_EVENT, e);
  }

}

const clickOutside = new ClickOutsideClass();
export default clickOutside;