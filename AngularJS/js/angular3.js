var app1=angular.module('app1',[]);

app1.controller('gListCtrl',function($scope){

  $scope.groceries=[
    {item:"Tomatoes",purchased:false},
    {item:"Potatoes",purchased:false},
    {item:"Bread",purchased:false},
    {item:"Hummus",purchased:false}
  ];

  $scope.getList=function(){
    return $scope.showList ? "ulgrocerylist.html" : "grocerylist.html";
  };
});
