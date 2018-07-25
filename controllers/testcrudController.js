
var app = angular.module('myApp', []);


app.controller('myCtrl', function($scope , $http , $interval) {

	// $scope.title = "";
	// $scope.url = "";




     // $interval( function() {

     //     $http.get("http://gentle-coast-86971.herokuapp.com/movie")
     //      .then(function(response) {

     //          $scope.data = response.data;
     //          console.log(response.data);


     // } , 30000);


     $scope.getData = function() {


          $http.get("http://gentle-coast-86971.herokuapp.com/movie")
          .then(function(response) {

              $scope.data = response.data;
              console.log(response.data);
            
        });


     }

     $scope.postData = function() {

        var message =document.getElementById("message");

        var dataObj = {
                title : $scope.title,
                url : $scope.url
                
        };

        $http.post("http://gentle-coast-86971.herokuapp.com/movie" , dataObj)
        .then(function(response){

                 message.innerHTML = response.statusText;
                 message.style.display = "block";

             }
              
            );


     }

     $scope.deleteData = function(x) {

        $scope.data.splice( x , 1 );


     }

      $scope.updateData = function(x) {

        $scope.index = x ;

        $scope.title = $scope.data[x].title ;
        $scope.url = $scope.data[x].url ;

        document.getElementById("confirm").style.display = "block";
        document.getElementById("cancel").style.display = "block";

     }

     $scope.confirmUpdate = function() {

        $scope.data[$scope.index].title = $scope.title;
        $scope.data[$scope.index].url = $scope.url;

        $scope.title = "";
         $scope.url = "";

         document.getElementById("confirm").style.display = "none";
        document.getElementById("cancel").style.display = "none";


     }

      $scope.cancel = function() {

         $scope.title = "";
         $scope.url = "";

         document.getElementById("confirm").style.display = "none";
        document.getElementById("cancel").style.display = "none";


     }




    
});


