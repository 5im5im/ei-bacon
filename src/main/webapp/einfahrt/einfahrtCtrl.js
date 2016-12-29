app.controller('einfahrtCtrl', function ($scope, $http) {
    $scope.startParking = function () {
        $http({
            method: 'POST',
            url: 'parkingService/startParking',
            data: {
                beaconId: $scope.beaconId,
                accountId: $scope.accountId
            }
        }).then(function onSuccess(response) {
            $scope.ticket = response.data;

            $scope.content = response.data;
            $scope.statuscode = response.status;
            $scope.statustext = response.statustext;
        }, function onError(response) {
            $scope.error = response.statusText;

            $scope.content = response.data;
            $scope.statuscode = response.status;
            $scope.statustext = response.statustext;
        });
    };
});