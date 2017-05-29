(function () {

    function loadingImageDirective() {
        var ddo = {
            restrict:'AEC',
            templateUrl: '/HTML/loadingImg.html',
            controller: 'loadingImgController',
            controllerAs:'loader'
        };

        return ddo;
    }

    //loadingImgController.$inject = ['$rootScope'];

    function loadingImgController($rootScope) {
        var loader = this;

        $rootScope.$on('processing', function (event, data) {
            if (data.on) {
                loader.show = true;
            }
            else {
                loader.show = false;
            }

        });

    }

    var app = angular.module("songApp");

    app.directive('loadingImage', loadingImageDirective);

    app.controller("loadingImgController", ['$rootScope', loadingImgController])


}())