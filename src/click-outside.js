export default new class {

  subscribers;

  constructor(height, width) {
    this.subscribers = new Set();
  }

  addToSubscribers(subscriber) {
    this.subscribers.add(subscriber)
  }

  deleteFromSubscribers(subscriber) {
    this.subscribers.add(subscriber)
  }

  /* using fat arrow to bind to instance */
  handleDocumentClick = (e) => {
    this.subscribers.forEach(f => {f(e)})
  };

}
