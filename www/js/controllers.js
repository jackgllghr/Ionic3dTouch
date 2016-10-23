angular.module('starter.controllers', [])
.controller('TabsCtrl', function($rootScope, $state){
    //Register listeners for 3D Touch
    $rootScope.$on('openTab', function(e, tabName) {
      console.log("PRESSED "+tabName);
      $state.go('tab.'+tabName);
    });
})

.controller('DashCtrl', function() {
  
})

.controller('ChatsCtrl', function($scope, $rootScope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
.controller('MapsCtrl', function($scope, $rootScope){
  $scope.testTab = function(){
    $rootScope.$broadcast('openTab', 'account');
  }
});
