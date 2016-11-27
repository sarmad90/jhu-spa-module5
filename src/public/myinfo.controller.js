angular.module("public")
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ["$scope", "MyInfoService"];
function MyInfoController($scope, MyInfoService){

  $scope.userInfo = MyInfoService.userInfo || {};
  $scope.menu_item = MyInfoService.menu_item || {};
};
