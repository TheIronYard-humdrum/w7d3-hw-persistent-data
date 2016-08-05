function MessageService ($http, SERVER) {

  this.sendMessage   = sendMessage;
  this.getMessages   = getMessages;
  this.getMessage    = getMessage;
  this.deleteMessage = deleteMessage;

  function sendMessage (message) {
    return $http.post(SERVER.URL, message);
  }

  function getMessages () {
    return $http.get(SERVER.URL);
  }

  function getMessage (id) {
    return $http.get(SERVER.URL + id);
  }

  function deleteMessage (message) {
    return $http.delete(SERVER.URL + message._id);
  }

}

MessageService.$inject = ['$http', 'SERVER'];
export { MessageService };