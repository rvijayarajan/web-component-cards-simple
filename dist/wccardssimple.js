angular.module('wcCardsSimpleTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('cards-simple.html',
    "<div class=\"card\">\r" +
    "\n" +
    "	<div class=\"card-header\" ng-if=\"$ctrl.config.headerText\">\r" +
    "\n" +
    "		{{$ctrl.config.headerText}}\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "  	<div class=\"card-body\">\r" +
    "\n" +
    "	  	<img src=\"{{$ctrl.config.topImage}}\" class=\"card-img-top\" alt=\"Top Image Unavailable. Please check source url.\" ng-if=\"$ctrl.config.topImage\">\r" +
    "\n" +
    "	  	<h5 class=\"card-title\" ng-if=\"$ctrl.config.title\">{{$ctrl.config.title}}</h5>\r" +
    "\n" +
    "	    <h6 class=\"card-subtitle mb-2 text-muted\" ng-if=\"$ctrl.config.subTitle\">{{$ctrl.config.subTitle}}</h6>\r" +
    "\n" +
    "	    <p class=\"card-text\" ng-if=\"$ctrl.config.bodyText\">{{$ctrl.config.bodyText}}</p>\r" +
    "\n" +
    "	    <a href=\"{{link.href}}\" class=\"card-link\" ng-repeat=\"link in $ctrl.config.cardLinks track by $index\" ng-if=\"$ctrl.config.cardLinks.length>0\">{{link.text}}</a>\r" +
    "\n" +
    "	    <img src=\"{{$ctrl.config.bottomImage}}\" class=\"card-img-top\" alt=\"Bottom Image Unavailable. Please check source url.\" ng-if=\"$ctrl.config.bottomImage\">\r" +
    "\n" +
    "	    <ul class=\"list-group list-group-flush\" ng-if=\"$ctrl.config.cardDetails.length>0\">\r" +
    "\n" +
    "	    	<li class=\"list-group-item\" ng-repeat=\"detail in $ctrl.config.cardDetails track by $index\">{{detail.text}}</li>\r" +
    "\n" +
    "	    </ul>\r" +
    "\n" +
    "  	</div>\r" +
    "\n" +
    "  	<div class=\"card-footer text-muted\" ng-if=\"$ctrl.config.footerText\">\r" +
    "\n" +
    "    	{{$ctrl.config.footerText}}\r" +
    "\n" +
    "  	</div>\r" +
    "\n" +
    "</div>"
  );

}]);

(function () {

 	var app = angular.module("wcCardsSimple",["wcCardsSimpleTemplates"]);

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
