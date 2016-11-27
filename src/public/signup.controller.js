angular.module("public")
.controller('SignupController', SignupController);

SignupController.$inject = ["$scope", "MenuService", "MyInfoService", 'ApiPath'];
function SignupController($scope, MenuService, MyInfoService, ApiPath){
  $scope.submit = function(){
    MenuService.getMenuItem($scope.menu_item_name).then(function(response){
      $scope.success_message = "Your information has been saved.";
      MyInfoService.userInfo.first_name = $scope.first_name;
      MyInfoService.userInfo.last_name = $scope.last_name;
      MyInfoService.userInfo.email = $scope.email;
      MyInfoService.userInfo.menu_item_name = $scope.menu_item_name;
      MyInfoService.menu_item = response.data;
      MyInfoService.menu_item.image = ApiPath + "/images/" + $scope.menu_item_name + ".json"

    }, function(error){
      $scope.menu_item_error = "No such menu item exists."
    });
  };
};
