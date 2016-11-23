(function (angular) {

  var ngAfxDirective = function () {
    return {
      restrict: 'A',
      link: function (scope, element, attributes) {
        var params = scope.$eval(attributes.ngAfx),
            className = 'ngafx-' + params.name.toLowerCase() + ' start animated ' + params.name + ' ' + params.type;
        if( params.condition ){
          element
            .addClass(className);
          element
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
              element.removeClass('start');
            });
        }
      }
    }
  };

  angular
    .module('ngAfx', [])
    .directive('ngAfx', ngAfxDirective)

})(angular);