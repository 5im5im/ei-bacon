app.config(function ($routeProvider) {
    $routeProvider
            .when("/", {
                templateUrl: "parking/parking.html"
            })

            //Parking
            .when("/einfahrt", {
                templateUrl: "parking/einfahrt/einfahrt.html"
            })
            .when("/ticket", {
                templateUrl: "parking/ticket/ticket.html"
            })
            .when("/ausfahrt", {
                templateUrl: "parking/ausfahrt/ausfahrt.html"
            })

            // User
            .when("/registration", {
                templateUrl: "user/registration.html"
            })
            .when("/account", {
                templateUrl: "user/account.html"
            })

            //Admin
            .when("/services", {
                templateUrl: "admin/services.html"
            })
            .otherwise({
                redirectTo: "/"
            });
});