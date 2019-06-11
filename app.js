(function () {

 	var app = angular.module("main",['wcCardsSimple']);

	app.component("app", {
		template: '<wc-cards-simple style="min-height: 50vh;width: 100%"></wc-cards-simple>',
		bindings: {
			
		},
		controller: "AppController"
	});

	app.controller("AppController", AppControllerFn);

	AppControllerFn.$inject = ["$scope"];

	function AppControllerFn($scope) {

		
		
	}

})();
