import { Validate } from '../Validator/validate';

function MessageController ($scope, SERVER, $http, MessageService) {
  $scope.messages = {};
  $scope.deleteMessage = deleteMessage;
  init();

  function init () {
    MessageService.getMessages().then( (res) => {
      $scope.messages = res.data;
      console.log($scope.messages)
    });
  }
  
  function sendMessage (message) {
    MessageService.sendMessage(message).then( (res) => {
      init();
      $scope.message = {};
    });
  }

  function deleteMessage (message) {
    MessageService.deleteMessage(message).then( (res) => {
      init();
    });
  }

  $scope.validateMessage = (original) => {
    let message;
    if (original === undefined) {
      message = new Validate();
    } else {
      message = new Validate(original);
    }
    if ( message.name     !== false &&
         message.email    !== false &&
         message.website  !== false &&
         message.message  !== false   ) 
                                      {
      sendMessage(message)
    }
  }
}

MessageController.$inject = ['$scope', 'SERVER', '$http', 'MessageService'];

export { MessageController };