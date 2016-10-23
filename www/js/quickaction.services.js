angular.module('starter')
.factory('QuickActionService', ['$rootScope', '$q', '$state', QuickActionService]);

function QuickActionService($rootScope, $q, $state) {

    function check3DTouchAvailability() {
        return $q(function(resolve, reject) {              
            if (window.ThreeDeeTouch) {
                window.ThreeDeeTouch.isAvailable(function (available) {
                    resolve(available);
                });
            } else {
                reject();
            }
        });
    }

    function configure() {
        // Check if 3D Touch is supported on the device
        check3DTouchAvailability().then(function(available) {

                if (available) {    // Comment out this check if testing in simulator

                    // Configure Quick Actions
                    window.ThreeDeeTouch.configureQuickActions([
                        {
                            type: 'dash',
                            title: 'Dashboard',
                            subtitle: '',
                            iconType: 'home'
                        },
                        {
                            type: 'chats',
                            title: 'Chats',
                            subtitle: 'Recent chats',
                            iconType: 'message'
                        },
                        {
                            type: 'account',
                            title: 'Account',
                            subtitle: '',
                            iconType: 'profile'
                        },
                        {
                            type: 'maps',
                            title: 'Maps',
                            subtitle: '',
                            iconType: 'location'
                        }
                    ]);

                    // Set event handler to check which Quick Action was pressed
                    window.ThreeDeeTouch.onHomeIconPressed = function(payload) {
                        // $rootScope.$broadcast('openTab', payload.type);  
                        
                        // Alternatively, just jump state from here
                        $state.go('tab.'+payload.type);    
                    };
                }
        })
    }

    return {
        configure: configure
    };
}