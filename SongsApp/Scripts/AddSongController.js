(function () {
    function addsong(dataService, genreService) {
        var add = this;

        add.Test = "Test";

        add.genresList = [];
        add.song = {};

        add.submit = function () {
            var obj = {
                title:"",
                rating:0,
                genres:[]
            };
            obj.title = add.song.title;
            obj.rating = add.song.rating;
            obj.genres.push(add.song.genre);


            dataService.create(obj).$promise.then(function (data) {
                console.log(data);
                alert("Song Uploaded Succesfully");

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
    app.controller("AddSongController", ['dataService','genreService', addsong]);
}())