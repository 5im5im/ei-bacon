app.controller('einfahrtCtrl', function ($scope, $http) {
    $scope.startParking = function () {
        $http({
            method: 'GET',
            url: 'parkingService/startParking',
            params: {
                "beaconId": $scope.beaconId,
                "accountId": $scope.accountId
            }//,
           // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function onSuccess(response) {
            $scope.ticket = response.data;

            $scope.content = response.data;
            $scope.statuscode = response.status;
            $scope.statustext = response.statustext;
        }, function onError(response) {
            console.log($scope.beaconId + " " + $scope.accountId);
            $scope.error = response.statusText;

            $scope.content = response.data;
            $scope.statuscode = response.status;
            $scope.statustext = response.statustext;
        });
    };
});