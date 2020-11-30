app.factory('user', ['$http', function($http) {
    var all = [];
	return{
    getData : function() {
        return $http.get("https://jsonplaceholder.typicode.com/users");
		
	}
	}
      /*   .then(function(response) {
          all = response.data;
          return all;
        }); */
  /*  }
     return {
        getData: getData 
    }; */
}]);