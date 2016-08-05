import angular from 'angular';

// Import Controllers
import { MessageController } from './controllers/message.controller';

// Import Services
import { MessageService } from './services/message.service'

// Import App Constants
import { serverConstant } from './controllers/app.constants';

angular
  .module('app', [])
  .constant('SERVER', serverConstant)
  .controller('MessageController', MessageController)
  .service('MessageService', MessageService)
;