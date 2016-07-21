import { Validate } from '../Validator/validate';

function MessageController ($scope, SERVER, $http) {
  $scope.message = [];

  init();

  function init () {
    $http.get(SERVER.URL).then( (res) => {
      $scope.message = res.data;
    });
  };
  
  function sendMessage (message) {
    $http.post(SERVER.URL, message).then( (res) => {
      $scope.message.push(res.data);
      $scope.message = {};
    }); 
  };

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
  };
};

MessageController.$inject = ['$scope', 'SERVER', '$http'];

export { MessageController };