records = ($scope, $http) ->
  $scope.images = []
  $http({
  method: 'GET',
  url: '../static/pokemon.json'
  }).then((response) ->
    res = response.data.byId
    console.log(res)
    image = []
    `for(var key in res) {
      image = res[key];
      $scope.images.push(image);
      }
      $scope.row_of_3 = chunk($scope.images, 3)
      `
    return
    )

angular.module('index', [])
.controller('IndexCtrl', records)

`function chunk(arr, size) {
  var newArr = [];
  for (var i=0; i<arr.length; i+= size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}`
