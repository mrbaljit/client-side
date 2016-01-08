/**
 * Created by shekhargulati on 10/06/14.
 */

var app = angular.module('todoapp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
]);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
    }).otherwise({
        redirectTo: '/'
    })
});

app.controller('ListCtrl', function ($scope, $http, $filter) {

    var orderBy = $filter('orderBy');

   /* $http.get('http://localhost:7090/todo/getSample').success(function (data) {
        $scope.todos = data;

        $scope.order = function (predicate, reverse) {
            $scope.todos = orderBy($scope.todos, predicate, reverse);
        };

    }).error(function (data, status) {
        console.log('Error ' + data)
    })
*/
    $http.get('http://localhost:7090/todo/user').success(function (data) {
        $scope.todos = data;
        console.log(data)

        $scope.order = function (predicate, reverse) {
            $scope.todos = orderBy($scope.todos, predicate, reverse);
        };

    }).error(function (data, status) {
        console.log('Error ' + data)
    })

});