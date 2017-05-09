(function () {
    function addgenre(dataService, genreService) {
        var add = this;

        add.submit = function () {
            var obj = {
                name:""
            };
            obj.name = add.genrename;


            genreService.create(obj).$promise.then(function (data) {
                console.log(data);
                alert("Genre created Succesfully");

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
    app.controller("AddGenreController", ['dataService', 'genreService', addgenre]);
}())