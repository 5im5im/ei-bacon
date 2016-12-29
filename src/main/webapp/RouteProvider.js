app.config(function ($routeProvider) {
    $routeProvider
            .when("/", {
                templateUrl: "main/main.html"
            })
            .when("/einfahrt", {
                templateUrl: "einfahrt/einfahrt.html"
            })
            .when("/ticket", {
                templateUrl: "ticket/ticket.html"
            })
            .when("/ausfahrt", {
                templateUrl: "ausfahrt/ausfahrt.html"
            })
            .when("/account", {
                templateUrl: "account/account.html"
            })
            .when("/admin", {
                templateUrl: "admin/index.html"
            })
            .otherwise({
                template: "<h2>Error 404</h2><p>Seite nicht gefunden.</p>"
            });
});