var app7=angular.module('app7',[]);

app7.controller('heroCtrl',function($scope,$rootScope){
  $scope.hero=[
    {realName:"Vijay",heroName:"Jegadeesh"},
    {realName:"Ajith",heroName:"Sonu"}
  ];

  $scope.getHeroData=function(){
    heroSearch($scope.heroName);
  };

  function heroSearch(name){
    $scope.heroData="Not Found";
    for(var i=0;i<$scope.hero.length;i++){
      if($scope.hero[i].heroName===name){
        $scope.heroData=$scope.hero[i].realName+" is " +$scope.hero[i].heroName;
      }
    }
  }

  $scope.$on("heroUpdated",function(event,args){
    $scope.hero.push({
      realName:args.realName,heroName:args.heroName
    });
  });
  $scope.addHeroData=function(realName,heroName){
    $rootScope.$broadcast("heroUpdated",
  {
    realName:realName,heroName:heroName
  });
    console.log("Real:"+realName+" Hero:"+heroName);
};
});
