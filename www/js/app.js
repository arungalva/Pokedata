angular.module('pokemon', ['ionic', 'pokemon.controllers', 'pokemon.services', 'jett.ionic.filter.bar', 'ionic-native-transitions'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }

    // NOTE: This is currently not working.
    // Setting StatusBar background color in config.xml instead.
    if (window.StatusBar) {
      if (cordova.platformId == 'android') {
        // StatusBar.backgroundColorByHexString("#333");
      }
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('pokeDex', {
      url: '/pokemon/',
      templateUrl: 'templates/pokeDex.html',
      controller: 'PokemonCtrl'
    })
    .state('pokemon-detail', {
      url: '/pokemon/:pokemonId',
      templateUrl: 'templates/pokemonDetail.html',
      controller: 'pokemonDetailCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html'
    });
  $urlRouterProvider.otherwise("/pokemon/");

})

.config(function($ionicNativeTransitionsProvider) {
  $ionicNativeTransitionsProvider.setDefaultOptions({
    duration: 300,
    slowdownfactor: 4,
    iosdelay: -1,
    androiddelay: -1,
    winphonedelay: -1,
    fixedPixelsTop: 0,
    fixedPixelsBottom: 0,
    triggerTransitionEvent: '$ionicView.afterEnter',
    backInOppositeDirection: false
  });
})

// Capitalize the first letter of each word
.filter('capitalize', function() {
  return function(input) {
    return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
  };
});
