// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('howdoyoudo', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('howdoyoudoCtrl', function($scope) {
	
   $scope.hdyd_date = new Date();
   $scope.smiliesList = [
	{ smile_icon: "hier wird das Icon angezeigt" , value:"very very well", selected: false},
    { smile_icon: "hier wird das Icon angezeigt" , value:"very well", selected: false},
    { smile_icon: "hier wird das Icon angezeigt" , value:"well", selected: true},
    { smile_icon: "hier wird das Icon angezeigt" , value:"don't know", selected: false},
    { smile_icon: "hier wird das Icon angezeigt" , value:"bad" , selected: false},
    { smile_icon: "hier wird das Icon angezeigt" , value:"very bad", selected: false},
    { smile_icon: "hier wird das Icon angezeigt" , value:"very very bad", selected: false}
  ];

   $scope.data = {
	        clientSide: 'well'
	    };
});