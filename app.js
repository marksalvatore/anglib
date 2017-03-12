(function(){
	'use strict';

	angular.module('app', ['ngRoute', 'ngSanitize', 'angularCSS']);

	// Constants
	angular.module('app').constant('BASEDATA', 'data.json');

	// Router
	angular.module('app').config(['$routeProvider', function($routeProvider) {

	  	$routeProvider
		  .when('/p0', { // 'p' + pageId
		    templateUrl: 'templates/default.html'
		  })
		  .when('/p13', {
		    templateUrl: 'templates/accrdn_h.html'
		  })
		  .when('/p24', {
		    templateUrl: 'templates/accrdn_v.html'
		  })
		  .when('/p35', {
		    templateUrl: 'templates/loginform.html'
		  })
		  .when('/p46', {
		    templateUrl: 'templates/default.html'
		  })
		  .otherwise({
		    redirectTo: '/p0'
		  });
	}]); // config

	angular.module('app').factory('DataFactory', ['$http', function($http){

		function getData(url){
			return $http.get(url, { cache: true }).then(extract);
		}

		function extract(result){
			return result.data;
		}
		return {
			getData: getData
		};

	}]); // factory

	// MainCtrl
	angular.module('app').controller('MainCtrl', ['$location', 'DataFactory', 'BASEDATA', function($location, DataFactory, BASEDATA) {
		var vm = this;
		vm.currPageId = 0;

		DataFactory.getData(BASEDATA)
			.then(function(data){
				vm.nav = data.nav;
				vm.pages = data.pages;
				vm.page = vm.pages[0]; //default page
			})
			.catch(function(error){
				vm.error = error;
				console.log(vm.error);
			})
			.finally(function(){
				vm.message = "ALL DATA LOADED!";
				console.log(vm.message);
		}); // DataFactory.getData()

		// Update page content
		vm.displayContent = function(pgIndex) {
			vm.page = vm.pages[pgIndex];
			for (var i=0; i<= vm.pages.length; i++) {
			  if( pgIndex == i) {
			  	// update currPageId
			  	vm.currPageId = vm.pages[i].pageId;
			  	break;
			  }
			}
		}; // displayContent()

	}]); // controller


}());
