var app = angular.module('myapp', []);
app.controller('mycontroller', function($scope, $http, user) {
    $scope.btname = 'ADD';
    $scope.sbtname = 'GET ALL';
	$scope.collection = []; //[{name: "Bob", phone:"989898989111"}, {name:"Tom", phone:"98227272222"}];

    $scope.insertIntoList = function() {


            if ($scope.name == null) {
                alert('insert Name')
            } else if ($scope.phone == null) {
                alert('insert Phone')
            } else {
				$scope.collection.push({name: $scope.name, phone: $scope.phone});			
            }

        }
		
	$scope.getList= function()  {

	$scope.collection = [];
	user.getData().then(
    function resolved (response) {
        var all = response.data;
		angular.forEach(all, function(c, i) {
		$scope.collection.push({name: c.name, phone: c.phone});
	})
    },
    function rejected (response) {
        alert(response.status + ': ' + response.statusText);
    }
);
	
	
	}	


})
