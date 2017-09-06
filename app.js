/* register the modules the application depends upon here*/
angular.module('listings', []);

/* register the application and inject all the necessary dependencies */
// directoryApp also used in index.html
var app = angular.module('directoryApp', ['listings']);
