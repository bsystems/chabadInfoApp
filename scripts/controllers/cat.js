'use strict';

angular.module('catTreeApp')
  .controller('CatCtrl', function ($scope,newsService) {

	
	
	var headers = newsService.getHeaders();
	headers.then(function(headersData){
		$scope.headers=headersData;
	})
	
	headers.catch(function(){
		alert("error");
	})
  
  
  });
