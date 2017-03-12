(function(){

	// DIRECTIVE - loginform
	var loginform = function($http){

		// CONTROLLER
		var controller = ['$scope', function($scope){

			// Interactivity


		}]; // controller

		// LINK
		var link = function($scope, element, attributes, ngShow) {

			$scope.datasource = 'components/loginform/data.json';

			// DATA
			$http.get($scope.datasource).success(function(data) {
	    	$scope.data = data;
			});
		}; // link

		// DDO - Directive Definition Object
		return {
			restrict: 'E',
			require: '?ngShow',
			scope: {}, // limits directive to its controller scope
			templateUrl: 'components/loginform/structure.html',
			replace: true,
			controller: controller,
			css: 'components/loginform/style.css'
		};
	}; // directive

	angular.module('app').directive('loginform', loginform);

}());
