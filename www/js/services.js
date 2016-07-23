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

.factory('PokemonAttacks', function($http) {
  // NOTE: data is actually a Promise object
  data = $http.get('./static/attacks.json');
  return {
    all: function() {
      return data;
    }
  };
});
