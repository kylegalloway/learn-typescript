/// <reference path="../node_modules/@types/angular/index.d.ts" />
/// <reference path="../node_modules/@types/angular-route/index.d.ts" />

module angularWithTS
{
    export class Routes
    {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider)
        {
            $routeProvider.when("/home",
                {
                    controller: "angularWithTS.controllers.tsDemoController",
                    templateUrl: "/app/views/playlist.html",
                    controllerAs: "playlist"
                });
            $routeProvider.otherwise({ redirectTo: "/home" });
        }
    }
}