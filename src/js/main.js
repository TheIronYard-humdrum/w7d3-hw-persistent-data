import angular from 'angular';

// Import Controllers
import { MessageController } from './controllers/message.controller';

// Import App Constants
import { serverConstant } from './controllers/app.constants';

angular
  .module('app', [])
  .constant('SERVER', serverConstant)
  .controller('MessageController', MessageController)
;