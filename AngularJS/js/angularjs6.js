var app2=angular.module('app2',[]);

app2.controller('eventctrl',function($scope){
  $scope.groceries=[
    {item:"Tomatoes",purchased:false},
    {item:"Potatoes",purchased:false},
    {item:"Bread",purchased:false},
    {item:"Hummus",purchased:false},
  ];

  $scope.addItem=function(newItem){
    if(!(newItem === undefined || newItem === "")){
      $scope.groceries.push({
        item:newItem,purchased:false
      });
      $scope.missingNewItemError = "";
    }else{
      $scope.missingNewItemError = "Please enter an Item";
    }
  };
});

app2.controller('userCtrl',function($scope){
  $scope.user=[{
    fname:"Vijay",
    lname:"Sub",
    delivery:"Email"
  }];

    $scope.saveUser = function (userInfo) {
      if($scope.userForm.$valid){
        $scope.user.push({
          fname:userInfo.fname, lname:userInfo.lname, delivery:userInfo.delivery
        });
        console.log("User Saved");
      }else{
        console.log("Error:Couldn't Save User");
      }

    };

});
