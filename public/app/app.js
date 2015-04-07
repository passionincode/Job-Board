/**
 * app Module
 *
 * Description
 *
 */
angular.module('app', []).

controller('testCtrl', ['$scope',
    function($scope) {
        $scope.jobs = [{
            title: 'Sales Person',
            description: 'you will fight dragons'
        }, {
            title: 'Accountant',
            description: ' you will use the keyboard'
        }]
    }
])