angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $rootScope, $ionicTabsDelegate) {
  //Setup tabs
  $scope.openTab = function (index){
      console.log("Opening tab "+index);
      $ionicTabsDelegate.select(index);
    }

  $rootScope.$on('openTab', function(e, tabName) {
    console.log("PRESSED "+tabName);
    debugger;
    switch(tabName){
      case 'dash':
        $scope.openTab(0);
        break;
      case 'chats':
        $scope.openTab(1);
        break;
      case 'account':
        $scope.openTab(2);
        break;
      case 'maps':
        $scope.openTab(3);
        break;
    }
  });

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
.controller('MapsCtrl', function($scope){
  
});
