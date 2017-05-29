(function () {
    function addgenre(dataService, genreService, $rootscope) {
        var add = this;

        function showLoadingImg() {
            $rootscope.$broadcast('processing', { on: true });
        }

        add.submit = function () {

            showLoadingImg();

            var obj = {
                name:""
            };
            obj.name = add.genrename;


            genreService.create(obj).$promise.then(function (data) {
                console.log(data);
                alert("Genre created Succesfully");
                $rootscope.$broadcast('processing', { on: false });

            });
        };



        (function () {
            //add.songlist = dataService.query();
            //console.log(add.songlist);
            genreService.query().$promise.then(function (data) {
                add.genresList = data.results;
                console.log(add.genresList);
            });
        }())
        return add;
    }


    var app = angular.module("songApp");
    app.controller("AddGenreController", ['dataService', 'genreService','$rootScope', addgenre]);
}())