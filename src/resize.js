import EventEmitter from 'events';

const RESIZE_EVENT = 'RESIZE_EVENT';

class ResizeEventClass extends EventEmitter {

  constructor() {
    super();
    window.addEventListener('resize', this.resize.bind(this))
  }

  addResizeListener(callback) {
    this.on(RESIZE_EVENT, callback);
  }

  removeResizeListener(callback) {
    this.removeListener(RESIZE_EVENT, callback);
  }

  resize(e) {
    this.emit(RESIZE_EVENT, e);
  }

}

const resizeEvent = new ResizeEventClass();
export default resizeEvent;