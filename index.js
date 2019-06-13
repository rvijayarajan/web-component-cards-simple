(function () {

 	var app = angular.module("wcCardsSimple",[]);

	app.component("wcCardsSimple", {
		templateUrl: "cards-simple.html",
		bindings: {
			config: "<cardsConfig"
		},
		controller: "CardsSimpleController"
	});

	app.controller("CardsSimpleController", CardsSimpleControllerFn);

	CardsSimpleControllerFn.$inject = ["$scope"];

	function CardsSimpleControllerFn($scope) {

		var vm = $scope.$ctrl;
	}

})();
