/*
 * Created by Welcome on 2/5/2016.
 */
angular.module("App")
    .controller("loginCtrl", function ($scope, $firebaseArray, $firebaseObject, $q) {
        var refAdd = new Firebase("https://teamofteam.firebaseio.com/projects/projectId1234/Doing")

        $scope.addFemale = function (user) {
            refAdd.orderByChild("serial").limitToLast(1).on("value", function (snapshot) {
                snapshot.forEach(function (data) {
                    console.log(data.val().serial);
                    user.serial = data.val().serial + 1;
                });
            });

            refAdd.push(user);
        }


        refAdd.orderByChild("serial").on('child_changed', function (childSnapshot, prevChildKey) {

            console.log('child is changed');
        });

        var cm = this;
        $scope.data = {};
        refAdd.orderByChild("serial").on('child_added', function (childSnapshot, prevChildKey) {
            //    console.log("C:",childSnapshot.val());
            //   console.log("C:",childSnapshot.key());
            //    data. push(childSnapshot.val());

            $scope.data[childSnapshot.key()] = childSnapshot.val();

            $scope.serial = childSnapshot.val();


            $scope.$apply();


            // console.log($scope.data);
        });

        $scope.dropSuccessHandler = function ($event, index, array) {

            $scope.currentIndex = index;
            $scope.currentId = Object.keys(array).splice(index, 1);
            // $scope.currentdata   = Object.keys(array).splice(index, 1);
            var data = array[$scope.currentId];
            droped(data);

            //var k = Object.keys(array).splice(index, 1);
            //console.log(index , k);
            //  $scope.previous  = $scope.add[k];
            //   $scope.previousIndex =  k ;
            //    swap($scope.current, $scope. $scope.previous , $scope.previousIndex);

            //var refAdd = new Firebase("https://teamofteam.firebaseio.com/projects/projectId1234/Doing"+'/' + k )
            //
            //refAdd.set({
            //    detail:'aaaa',
            //    other:'oooo',
            //    title :'bbbb'
            //})


            //var k = Object.keys(array).splice(index, 1)
            //console.log(k)
            //k = k[0];
            //refDone.child(k).remove();
            //refReview.child(k).remove();
            //refDoing.child(k).remove();
            //refAdd.child(k).remove();


        };
        $scope.onDrop = function ($event, index, array) {
            //

            $scope.previousIndex = index;
            $scope.previousKey = Object.keys(array).splice(index, 1);


            //var k = Object.keys(array).splice(index, 1);
            ////console.log(index , k);
            //$scope.current  = $scope.add[k];


            //var refAdd = new Firebase("https://teamofteam.firebaseio.com/projects/projectId1234/Doing"+'/' + k )

            //refAdd.set({
            //    detail:'aaaa',
            //    other:'oooo',
            //    title :'bbbb'
            //})

            //swap

            //  var refAdd = new Firebase("https://teamofteam.firebaseio.com/projects/projectId1234/Doing"+'/' + k )

            //refAdd.set({
            //    detail:'aaaa',
            //    other:'oooo',
            //    title :'bbbb'
            //})


        }
        function droped(data) {

            var mean = ($scope.currentIndex - $scope.previousIndex) / 2;
            var refAdd = new Firebase("https://teamofteam.firebaseio.com/projects/projectId1234/Doing" + '/' + $scope.currentId)

            refAdd.set({
                detail: data.detail,
                serial: mean,

            })

        }


        function calcSerial(currentIndex, PreviousIndex) {

            console.log(currentIndex);
            console.log(PreviousIndex);


            return (currentIndex + PreviousIndex) / 2;

        }

        function swap(current, previous) {

            console.log(current);

            //var refAdd = new Firebase("https://teamofteam.firebaseio.com/projects/projectId1234/Doing"+'/' + current );
            //
            //var obj = {};
            //obj.push(refAdd);
            //
            //refAdd.set(obj);

            //var refAdd = new Firebase("https://teamofteam.firebaseio.com/projects/projectId1234/Doing"+'/' + previous );
            //refAdd.set(previous);

            //   console.log(current , previous);
        }

        //$scope.onDrop = function ($event, $data, array) {
        //    refDoing.push($data);
        //};
        //$scope.onDrop1 = function ($event, $data, array) {
        //    refAdd.push($data);
        //};
        //$scope.onDrop2 = function ($event, $data, array) {
        //    refReview.push($data);
        //};
        //$scope.onDrop3 = function ($event, $data, array) {
        //    refDone.push($data);
        //};


    });

