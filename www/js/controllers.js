/* jshint esversion: 6 */

angular.module('pokemon.controllers', [])
  .controller('PokemonCtrl', function($scope, Pokemon, $ionicFilterBar) {
    $scope.allPokemon = [];
    images = [];
    Pokemon.all().then(function(response) {
      images = response.data;
      $scope.pokemon = images;
    });

    $scope.showFilterBar = function() {
      filterBarInstance = $ionicFilterBar.show({
        items: $scope.pokemon,
        update: function(filteredItems) {
          $scope.pokemon = filteredItems;
        },
        filterProperties: 'name'
      });
    };

  })
  .controller('pokemonDetailCtrl', function($scope, $ionicLoading, $stateParams, Pokemon) {

    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });

    $scope.$on('$ionicView.enter', function() {
      Pokemon.all().then(function(response) {
        data = response.data[parseInt($stateParams.pokemonId) - 1];
        $scope.allPokemon = response.data;
        $scope.pokemonInfo = response.data[parseInt($stateParams.pokemonId) - 1];
        $ionicLoading.hide();
      });
    });

  })

.controller('AttacksCtrl', function($scope, $ionicLoading, attacks) {

  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });

  attacks.all().then(function(res) {
    $scope.attacks = Object.keys(res.data).map(key => res.data[key]);
    $ionicLoading.hide();
  });
});
