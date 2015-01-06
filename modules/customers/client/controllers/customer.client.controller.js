'use strict';

// Customers controller
angular.module('customers').controller('CustomerController', ['$scope', '$stateParams', '$location', 'Menus', 'Authentication', 'Customers',
    function($scope, $stateParams, $location, Menus, Authentication, Customers) {
        $scope.customerMenu = Menus.getMenu('customer');
        $scope.authentication = Authentication;
        $scope.customer = {
            fullName: 'test test',
            listings: [{
                name: 'test'
            }]
        };
        //$scope.customer = Customers.get({
        //    customerId: $stateParams.customerId
        //});
    }
]);
