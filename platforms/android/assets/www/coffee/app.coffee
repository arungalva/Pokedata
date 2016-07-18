records = ($scope) ->
  $scope.records = [
    "Alfreds Futterkiste",
    "Berglunds snabbköp",
    "Centro comercial Moctezuma",
    "Ernst Handel",
    ]
  return

angular.module('index', [])
.controller('IndexCtrl', records)
