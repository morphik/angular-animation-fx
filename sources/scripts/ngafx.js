(function (angular) {

  var ngAfxDirective = ['$timeout', function ($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element, attributes) {
        var params = scope.$eval(attributes.ngAfx),
            className = 'ngafx-' + params.name.toLowerCase() + ' start animated ' + params.name + ' ' + params.type;
        if( params.condition ){
          element
            .addClass(className);
          try{
            if(window.isDebugMode && window.isDirectivesDebug) console.log('ngAfxDirective > link > try ');
            element
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
              element.removeClass('start animated');
            });
          } catch( e ){
            if(window.isDebugMode && window.isDirectivesDebug) console.log('ngAfxDirective > link > catch ');
            $timeout(function () {
              element.removeClass('start animated');
            }, 1000);
          }
        }
      }
    }
  }];

  angular
    .module('ngAfx', [])
    .directive('ngAfx', ngAfxDirective)

})(angular);