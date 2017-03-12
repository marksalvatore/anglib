(function(){

	"use strict";
	
	// DIRECTIVE - Accordion
	var accordion = function($http){

		// CONTROLLER
		var controller = ['$scope', function($scope){

			// Interactivity
			$scope.setSelected = function(accordn) {
				// Use this conditional to close accordn if already open
				if ( $scope.isSelected(accordn) ) {
					$scope.selected = false;
				} else {
					$scope.selected = accordn;
				}
			}
			$scope.isSelected = function(accordn) {
			   return $scope.selected === accordn;
			}

		}]; // controller

		// LINK
		var link = function($scope, element, attributes, ngShow) {

			// User config parameters
			if ( attributes['orientation'] ) {
				$scope.orientation = attributes['orientation'];
			} else {
				// use default
				$scope.orientation = 'h';
			}

			if ( attributes['datasource'] ) {
				$scope.datasource = 'components/accordion/' + attributes['datasource'];
			} else {
				// use default
				$scope.datasource = 'components/accordion/data.json';
			}

			// DATA
			$http.get($scope.datasource).success(function(data) {
	    	$scope.accordion = data.accordion;
			});
		}; // link

		// DDO - Directive Definition Object
		return {
			restrict: 'E',
			require: '?ngShow',
			scope: {}, // limits directive to its controller scope
			templateUrl: 'components/accordion/structure.html',
			replace: true,
			controller: controller,
			css: 'components/accordion/style.css',
			link: link
		};
	}; // directive

	angular.module('app').directive('accordion', accordion);

}());
