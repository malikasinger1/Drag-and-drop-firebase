/*
 * Created by Welcome on 2/5/2016.
 */

angular.module("App")


    .controller("loginCtrl", function ($scope, $firebaseArray, $firebaseObject, $q) {
        var refAdd = new Firebase("https://draganddropsdk.firebaseio.com/add")


        $scope.addFemale = function (user) {
            refAdd.push(user)
        }
        refAdd.on("value", function (snapshot) {
            $scope.add = snapshot.val()
            //    console.log($scope.add)  
            setTimeout(function () {
                $scope.$apply()
            }, 100)
        });


        var refDoing = new Firebase("https://draganddropsdk.firebaseio.com/diong")
        // $scope.addMale = function (user) {
        //     refDoing.push(user)
        // }
        refDoing.on("value", function (snapshot) {
            $scope.diong = snapshot.val()
            //    console.log($scope.diong)
            setTimeout(function () {
                $scope.$apply()
            }, 1000)
        })


        var refReview = new Firebase("https://draganddropsdk.firebaseio.com/review")

        refReview.on("value", function (snapshot) {
            $scope.review = snapshot.val()
            setTimeout(function () {
                $scope.$apply()
            }, 100)
        })

        var refDone = new Firebase("https://draganddropsdk.firebaseio.com/done")

        refDone.on("value", function (snapshot) {
            $scope.done = snapshot.val()
            setTimeout(function () {
                $scope.$apply()
            }, 100)
        })


        $scope.dropSuccessHandler = function ($event, index, array) {
            var k = Object.keys(array).splice(index, 1)
            console.log(k)
            k = k[0];
            refDone.child(k).remove();
            refReview.child(k).remove();
            refDoing.child(k).remove();
            refAdd.child(k).remove();


        };


        $scope.onDrop = function ($event, $data, array) {
            refDoing.push($data);
        };
        $scope.onDrop1 = function ($event, $data, array) {
            refAdd.push($data);
        };
        $scope.onDrop2 = function ($event, $data, array) {
            refReview.push($data);
        };
        $scope.onDrop3 = function ($event, $data, array) {
            refDone.push($data);
        };
    });

