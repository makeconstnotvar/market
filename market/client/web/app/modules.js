angular.module('underscore', []);
angular.module('controller', ['entity', 'ngSanitize']);
angular.module('entity', []);
angular.module('client-templates', []);
angular.module('router', ['ui.router', 'controller', 'ngAnimate', 'client-templates']);