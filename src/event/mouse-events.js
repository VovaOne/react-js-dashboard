import EventEmitter from 'events';


const MOUSE_MOVE_EVENT = 'MOUSE_MOVE_EVENT';
const MOUSE_UP_EVENT = 'MOUSE_UP_EVENT';
const CLICK_OUTSIDE_EVENT = 'CLICK_OUTSIDE_EVENT';


class MouseMoveEventEmitterClass extends EventEmitter {
  constructor() {
    super();
    window.addEventListener('click', this.emitClickOutside.bind(this));
  }


  addClickListener(callback) {
    this.on(CLICK_OUTSIDE_EVENT, callback);
  }

  removeClickListener(callback) {
    this.removeListener(CLICK_OUTSIDE_EVENT, callback);
  }

  emitClickOutside(e) {
    this.emit(CLICK_OUTSIDE_EVENT, e);
  }


  emitMouseMove(e) {
    this.emit(MOUSE_MOVE_EVENT, e);
  }

  addMouseMoveListener(callback) {
    this.on(MOUSE_MOVE_EVENT, callback);
  }

  removeMouseMoveListener(callback) {
    this.removeListener(MOUSE_MOVE_EVENT, callback);
  }


  emitMouseUp(e) {
    this.emit(MOUSE_UP_EVENT, e);
  }

  addMouseUpListener(callback) {
    this.on(MOUSE_UP_EVENT, callback);
  }

  removeMouseUpListener(callback) {
    this.removeListener(MOUSE_UP_EVENT, callback);
  }

}

const mouseMoveEventEmitter = new MouseMoveEventEmitterClass();
export default mouseMoveEventEmitter;


