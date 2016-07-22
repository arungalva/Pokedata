angular.module('pokemon.controllers', [])
  .controller('PokemonCtrl', function($scope, Pokemon,$ionicFilterBar) {
    $scope.allPokemon=[];
    images = [];
    Pokemon.all().then(function(response) {
      images = response.data;
      $scope.pokemon = images;
    });

    $scope.showFilterBar = function () {
      filterBarInstance = $ionicFilterBar.show({
        items: $scope.pokemon ,
        update: function (filteredItems) {
          $scope.pokemon   = filteredItems;
        },
        filterProperties: 'name'
      });
    };

  })
  .controller('pokemonDetailCtrl', function($scope,$ionicLoading,$stateParams,Pokemon) {
    $scope.$on('$ionicView.enter', function() {
      Pokemon.all().then(function(response) {
        data = response.data[parseInt($stateParams.pokemonId)-1];
        $scope.pokemonInfo = response.data[parseInt($stateParams.pokemonId)-1];
        $scope.allPokemon = response.data;
      });
    });
  })
