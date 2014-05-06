'use strict';
 


angular.module('catTreeApp')
  .factory('newsService', function (dataSrc) {
    return {
      getHeaders: function () {
        return dataSrc.getData("headers");
      }
    };
  });
