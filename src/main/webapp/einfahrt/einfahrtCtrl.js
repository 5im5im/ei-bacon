app.controller('einfahrtCtrl', function ($scope, $http) {
    $scope.startParking = function () {
        $http({
            method: 'POST',
            url: 'parkingService/startParking',
            params: {
                "beaconId": $scope.beaconId,
                "accountId": $scope.accountId
            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function onSuccess(response) {
            $scope.ticket = response.data;
        }, function onError(response) {
            $scope.errMsg = "parkingService/startParking failed with status " + response.status;
        });
    };
});