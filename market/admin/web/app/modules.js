angular.module('underscore', []);
angular.module('beautify', []);
angular.module('translit', []);
angular.module('admin-templates',[]);
angular.module('controller', ['entity', 'angularFileUpload', 'ngSanitize', 'underscore', 'angular-storage', 'ui.ace', 'beautify', 'translit']);
angular.module('entity', ['underscore']);
angular.module('router', ['ui.router', 'controller', 'ngAnimate', 'admin-templates']);

