(function () {
    function viewsong(dataService) {
        var view = this;

        view.displayObj = [];

        (function () {
            //add.songlist = dataService.query();
            //console.log(add.songlist);
            dataService.query().$promise.then(function (data) {
                view.songlist = data.results;
                console.log(view.songlist);

                for (var song in view.songlist) {
                    var obj = {};
                    obj.title = view.songlist[song].title;
                    obj.genres = view.songlist[song].genres.length > 0 ? view.songlist[song].genres[0].name : 'None';
                    obj.rating = view.songlist[song].rating;
                    obj.id = view.songlist[song].id;
                    view.displayObj.push(obj);
                }
                console.log(view.displayObj);

            });
        }())



        return view;

    }


    var app = angular.module("songApp");
    app.controller("ViewSongController", ['dataService', viewsong]);
}())