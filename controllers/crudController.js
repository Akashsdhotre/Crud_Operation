
var app = angular.module('myApp', []);


app.controller('myCtrl', function($scope) {

	$scope.username = "";
	$scope.password = "";

    $scope.data = [
        {uname : "Akash", pwd : "Aa@123"},
        {uname : "Akshay", pwd : "Ak@123"},
        {uname : "Rehan", pwd : "Re@123"},
        {uname : "Parth", pwd : "Pa@123"},
    ];

    

    $scope.insertData = function() {

          
    	 console.log($scope.username);
         console.log($scope.password);

         var pwdMessage =document.getElementById("pwdMessage");

         var i;
         var digit = false;
         var lower = false
         var uppercase = false;
         var special = false;

         // cheking password contains 1 digit 1 uppercase 1 special char

         for (i = 0 ; i < $scope.password.length ; i++) {

         	if ( $scope.password.charCodeAt(i) >= 65  &&  $scope.password.charCodeAt(i) <= 90) {

                uppercase = true;

         	}

         	else if ( $scope.password.charCodeAt(i) >= 97 && $scope.password.charCodeAt(i) <= 122 ){

                lower = true;
         	}  

         	else if ( $scope.password.charCodeAt(i) >= 48 && $scope.password.charCodeAt(i) <= 57 ){

                digit = true;
         	}

         	else {

         		special = true ;
         	}

         }

         if( $scope.username != "" && digit == true && lower == true && uppercase == true && special == true) {

            $scope.data.push({ uname : $scope.username , pwd : $scope.password});  

            if (pwdMessage.style.display === "block") {

            	pwdMessage.style.display = "none";
            }	

              message.innerHTML = "Record Inserted Successfully";
              message.style.color ="green";
              message.style.display = "block"

         }

         else {

         	if (pwdMessage.style.display === "none") {

                pwdMessage.style.display = "block";


             }

                message.innerHTML = "Record not Inserted ";
                message.style.color = "red";
                message.style.display = "block";

         }
       

          // $scope.data[ $scope.data.length - 1 ].uname = $scope.username ; 
           // $scope.data[ $scope.data.length - 1 ].pwd = $scope.password ;
     }
      
             
     

     $scope.UpdateData = function() {

      var message =document.getElementById("message");


     	for (var i = 0; i < $scope.data.length; i++) {

            if ( $scope.data[i].uname == $scope.username ) {

            	$scope.data[i].uname = $scope.username ;
            	$scope.data[i].pwd = $scope.password ;


                     message.innerHTML = "Record Updated Successfully";
                     message.style.color ="green";
            		 message.style.display = "block";

             }

            else {
                
                message.innerHTML = "Record not found";
                message.style.color = "red";
                message.style.display = "block";


            }
     		
     	}


     }

     $scope.deleteData = function() {

     	var message =document.getElementById("message");


     	for (var i = 0; i < $scope.data.length; i++) {

            if ( $scope.data[i].uname == $scope.username ) {

            	$scope.data[i].uname = "" ;
            	$scope.data[i].pwd = "" ;


                     message.innerHTML = "Record Deleted Successfully";
                     message.style.color ="green";
            		 message.style.display = "block";

             }

            else {
                
                message.innerHTML = "Record not found";
                message.style.color = "red";
                message.style.display = "block";


            }
     		
     	}


     }

     $scope.resetData = function() {

     	$scope.username = "";
     	$scope.password = "";
     }

    
});


