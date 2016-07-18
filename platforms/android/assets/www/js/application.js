var records;

records = function($scope) {
  $scope.records = ["Alfreds Futterkiste", "Berglunds snabbköp", "Centro comercial Moctezuma", "Ernst Handel"];
};

angular.module('index', []).controller('IndexCtrl', records);
