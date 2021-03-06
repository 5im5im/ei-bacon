app.controller('parkingServiceRestletCtrl', function ($scope, $http) {
    $scope.startParking = function (entryBeaconId, accountId) {
        $http({
            method: 'POST',
            url: 'parkingService/startParking',
            params: {
                "entryBeaconId": entryBeaconId,
                "accountId": accountId
            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function onSuccess(response) {
            $scope.ticket = response.data;
        }, function onError(response) {
            console.log(response.status);
            console.log(response.data);
            console.log("entryBeaconId=" + entryBeaconId);
            console.log("accountId=" + accountId);
            $scope.errMsg = "parkingService/startParking failed with status " + response.status;
        });
    };

    $scope.endParking = function (exitBeaconId, ticketId) {
        $http({
            method: 'POST',
            url: 'parkingService/endParking',
            params: {
                "exitBeaconId": exitBeaconId,
                "ticketId": ticketId
            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function onSuccess(response) {
            $scope.ticket = response.data;
        }, function onError(response) {
            console.log(response.status);
            console.log(response.data);
            console.log("exitBeaconId=" + exitBeaconId);
            console.log("ticketId=" + ticketId);
            $scope.errMsg = "parkingService/endParking failed with status " + response.status;
        });
    };

    $scope.verifyTicketPayment = function (ticketId) {
        $http({
            method: 'POST',
            url: 'parkingService/verifyTicketPayment',
            params: {
                "ticketId": ticketId
            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function onSuccess(response) {
            $scope.ticket = response.data;
            
            //5im: Hack to simulate parking fee. Should be encapsulated in a separate restlet paymentService.
            $scope.user.saldo = $scope.user.saldo - $scope.ticket.parkingFee;
        }, function onError(response) {
            console.log(response.status);
            console.log(response.data);
            console.log("ticketId=" + ticketId);
            $scope.errMsg = "parkingService/verifyTicketPayment failed with status " + response.status;
        });
    };
});