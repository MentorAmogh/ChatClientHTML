angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://localhost:8080/collaboration/user').
        then(function(response) {
            $scope.greeting = response.data;
        });
});