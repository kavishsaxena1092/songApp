/// <reference path="angular.js" />


(function () {

    function homeController(state) {
        var home = this;
        home.changeState = function (stateName) {
            state.go(stateName);
        };

        return home;
    }

    var app = angular.module("songApp", ['ui.router','ngResource']);

    app.controller("homeController", ['$state',homeController]);
}())