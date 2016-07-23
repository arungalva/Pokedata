angular.module('pokemon.services', [])

.factory('Pokemon', function($http) {
  return {
    all: function() {
      return $http({
        method: 'GET',
        url: '../static/pokemon.json'
      });
    },
  };
})

.factory('attacks', function($http) {
  return {
    all: function() {
      return $http.get('./static/attacks.json');
    }
  };
});
