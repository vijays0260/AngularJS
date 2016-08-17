var app1=angular.module('app1',[]);

app1.controller('ctrl1',function($scope){

  $scope.randomNum1=Math.floor((Math.random()*10)+1);
  $scope.randomNum2=Math.floor((Math.random()*10)+1);

});

app1.controller('badCtrl',function($scope){

  var badfeelings=["Disregarded","Powerless","Unimportant"];
  $scope.bad=badfeelings[Math.floor((Math.random()*3))];
});

app1.controller('goodCtrl',function($scope){

  var goodfeelings=["Awesome","Pleasure","Loveable"];
  $scope.good=goodfeelings[Math.floor((Math.random()*3))];
});
