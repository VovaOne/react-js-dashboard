export default new class {

  subscribers;
  eventId = 0;

  constructor(height, width) {
    this.subscribers = new Map();
  }

  addToSubscribers(subscriber) {
    var eventId = this.eventId++;
    this.subscribers.set(eventId, subscriber);
    return eventId;
  }

  deleteFromSubscribers(id) {
    this.subscribers.delete(id)
  }

  /* using fat arrow to bind to instance */
  handleDocumentClick = (e) => {
    this.subscribers.forEach((value, key, myMap) => {
      value(e);
    })
  };

}
