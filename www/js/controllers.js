angular.module('pokemon.controllers', [])
  .controller('PokemonCtrl', function($scope, Pokemon, $ionicFilterBar) {
    images = [];
    $scope.allPokemon = [];
    $scope.title = "Pokédata";
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
  .controller('pokemonDetailCtrl', function($scope, $ionicLoading, $stateParams, Pokemon, PokemonAttacks) {

    opts = {
      template: '<span class="ion-load-c"></span>'
    };

    $scope.isListShown = function(attack) {
      return $scope.showList === attack;
    };

    $scope.toggleList = function(attack) {
      if ($scope.isListShown(attack)) {
        $scope.showList = null;
      } else {
        $scope.showList = attack;
      }
    };

    $ionicLoading.show(opts);

    $scope.$on('$ionicView.enter', function() {

      Pokemon.all().then(function(response) {
        data = response.data[parseInt($stateParams.pokemonId) - 1];
        $scope.allPokemon = response.data;
        $scope.pokemonInfo = response.data[parseInt($stateParams.pokemonId) - 1];
      });

      PokemonAttacks.all().then(function(res) {
        $scope.attacks = res.data;
        $ionicLoading.hide();
      });

    });

  });
