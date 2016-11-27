angular.module("public")
.controller('SignupController', SignupController);

SignupController.$inject = ["$scope", "MenuService", "MyInfoService"];
function SignupController($scope, MenuService, MyInfoService){
  $scope.submit = function(){
    MenuService.getMenuItem($scope.menu_item).then(function(response){
      $scope.success_message = "Your information has been saved.";
      MyInfoService.userInfo.first_name = $scope.first_name;
      MyInfoService.userInfo.last_name = $scope.last_name;
      MyInfoService.userInfo.email = $scope.email;
      MyInfoService.userInfo.menu_item = $scope.menu_item;

    }, function(error){
      // $scope.menu_item_error = "No such menu item exists."

      $scope.success_message = "Your information has been saved.";
      MyInfoService.userInfo.first_name = $scope.first_name;
      MyInfoService.userInfo.last_name = $scope.last_name;
      MyInfoService.userInfo.email = $scope.email;
      MyInfoService.userInfo.menu_item = $scope.menu_item;
    });
  };
};
