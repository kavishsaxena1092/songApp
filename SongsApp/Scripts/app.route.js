(function () {

    var app = angular.module("songApp");
    app.config(function ($stateProvider, $urlRouterProvider) {

        //$urlRouterProvider.otherwise('/AddSong');

        $stateProvider

            // HOME STATES AND NESTED VIEWS ========================================
            .state('AddSong', {
                url: '/AddSong',
                controller: "AddSongController",
                controllerAs:"add",
                templateUrl: '/HTML/AddSong.html'
            })
        .state('ViewSong', {
            url: '/ViewSong',
            controller: "ViewSongController",
            controllerAs: "view",
            templateUrl: '/HTML/ViewSong.html'
        })
        .state('EditSong', {
            url: '/EditSong',
            controller: "EditSongController",
            controllerAs: "edit",
            templateUrl: '/HTML/EditSong.html'
        })
        .state('AddGenre', {
            url: '/AddGenre',
            controller: "AddGenreController",
            controllerAs: "add",
            templateUrl: '/HTML/AddGenre.html'
        })
        .state('EditGenre', {
            url: '/EditGenre',
            controller: "EditGenreController",
            controllerAs: "edit",
            templateUrl: '/HTML/EditGenre.html'
        });
    });
}())