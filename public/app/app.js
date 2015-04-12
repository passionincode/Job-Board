/**
 * app Module
 *
 * Description
 *
 */
angular.module('app', ['ngResource']).

controller('testCtrl', ['$scope', '$resource',
    function($scope, $resource) {
        $scope.jobs = $resource('/api/jobs').query();
    }
])