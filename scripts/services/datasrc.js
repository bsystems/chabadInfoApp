'use strict';

angular.module('catTreeApp')
  .factory('dataSrc', function ($http, $log, $q) {
// HANDLE GET DATA FROM WEB SERVICES // 

    return {

        getData: function (action, metaData) {


            var deferred = $q.defer();

            $http.post('http://www.chabad.info/n/dataserver.php?action=' + action, {'metaData': JSON.stringify(metaData)}
            ).

                success(function (data, status, header, config) {
                    


                 

                        deferred.resolve(data);


                    
                }).


                error(function (data, status, header, config) {
                    deferred.reject(false);
                    $log.warn(data, status, header, config);
                });


            return deferred.promise;


        },


    }
});


  
  