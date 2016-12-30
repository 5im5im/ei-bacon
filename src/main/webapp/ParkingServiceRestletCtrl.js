app.controller('parkingServiceRestletCtrl', function ($scope, $http) {
    $scope.startParking = function () {
        $http({
            method: 'POST',
            url: 'parkingService/startParking',
            params: {
                "entryBeaconId": $scope.entryBeaconId,
                "accountId": $scope.accountId
            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function onSuccess(response) {
            $scope.ticket = response.data;
        }, function onError(response) {
            console.log(response.status)
            console.log(response.data)
            console.log("entryBeaconId" + $scope.entryBeaconId)
            console.log("accountId" + $scope.accountId)
            $scope.errMsg = "parkingService/startParking failed with status " + response.status;
        });
    };
    
    $scope.endParking = function () {
        $http({
            method: 'POST',
            url: 'parkingService/endParking',
            params: {
                "exitBeaconId": $scope.exitBeaconId,
                "ticketId": $scope.ticketId
            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function onSuccess(response) {
            $scope.ticket = response.data;
        }, function onError(response) {
            console.log(response.status)
            console.log(response.data)
            console.log("exitBeaconId" + $scope.exitBeaconId)
            console.log("ticketId" + $scope.ticketId)
            $scope.errMsg = "parkingService/endParking failed with status " + response.status;
        });
    };
});