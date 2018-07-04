import angular from 'angular'
import { HaveibeenpwnedService } from './services/haveibeenpwnedService'
import { HasingService } from './services/hasingService'
import { PasswordCtrl } from './passwordComponent/passwordCtrl'
import { PasswordDirective } from './passwordComponent/passwordDirective'

import '../style/app.css'

const app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
}

class AppCtrl {
  constructor () {
    this.name = 'Anthony Scotti'
  }
}

const MODULE_NAME = 'app'

angular
  .module(MODULE_NAME, [])
  // Services
  .factory('haveibeenpwned', ['$http', HaveibeenpwnedService])
  .factory('hasing', HasingService)
  // Component - App
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  // Component - Password
  .directive('appPassword', PasswordDirective)
  .controller('PasswordCtrl', ['haveibeenpwned', 'hasing', PasswordCtrl])

export default MODULE_NAME
