angular.module("App", ["ngMaterial", "ui.router", "firebase", "ang-drag-drop"])


    .config(function ($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state("loginAdmin", {
                url: "/",
                templateUrl: "templates/loginAdmin.html",
                // template : "Write Something.",
                controller: "loginCtrl"
            })


        $urlRouterProvider.otherwise("/")
    })
