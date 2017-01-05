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
			.when("/registration", {
                templateUrl: "registration/registration.html"
            })
            .when("/account", {
                templateUrl: "user/account.html"
            })
            .when("/services", {
                templateUrl: "admin/services.html"
            })
            .otherwise({
                redirectTo: "/"
            });
});