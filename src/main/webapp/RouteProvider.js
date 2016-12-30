app.config(function ($routeProvider) {
    $routeProvider
            .when("/", {
                templateUrl: "parking/parking.html"
            })
            .when("/einfahrt", {
                templateUrl: "parking/einfahrt/einfahrt.html"
            })
            .when("/ticket", {
                templateUrl: "parking/ticket/ticket.html"
            })
            .when("/ausfahrt", {
                templateUrl: "parking/ausfahrt/ausfahrt.html"
            })
            .when("/account", {
                templateUrl: "account/account.html"
            })
            .when("/services", {
                templateUrl: "admin/services.html"
            })
            .otherwise({
                redirectTo: "/"
            });
});