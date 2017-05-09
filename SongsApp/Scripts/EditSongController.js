(function () {
    function editsong(dataService, genreService) {
        var edit = this;
        edit.showlistContainer = true;
        edit.editListContainer = false;
        edit.song = {};

        edit.displayObj = [];

        (function () {
            //add.songlist = dataService.query();
            //console.log(add.songlist);
            dataService.query().$promise.then(function (data) {
                edit.songlist = data.results;
                console.log(edit.songlist);

                for (var song in edit.songlist) {
                    var obj = {};
                    obj.title = edit.songlist[song].title;
                    obj.genres = edit.songlist[song].genres.length > 0 ? edit.songlist[song].genres[0].name : 'None';
                    obj.rating = edit.songlist[song].rating;
                    obj.id = edit.songlist[song].id;
                    edit.displayObj.push(obj);
                }
                console.log(edit.displayObj);

            });

            genreService.query().$promise.then(function (data) {
                edit.genresList = data.results;
                console.log(edit.genresList);
            });


        }())

        edit.editTrack = function () {
            edit.showlistContainer = false;
            edit.editListcontainer = true;
            var obj = edit.songlist.filter(function (song) {
                if (song.id == edit.selectedTrack)
                    return true;
            });

            edit.song.title = obj[0].title;
            edit.song.rating = obj[0].rating;
            edit.song.genre = obj[0].genres[0].id||0;
            edit.song.id=obj[0].id;

        }

        edit.submit = function () {
            dataService.update({ id: edit.song.id }, edit.song).$promise.then(function (data) {
                console.log(data);
                alert("Updated Successfully");
                edit.showlistContainer = true;
                edit.editListcontainer = false;
            });
        };

        return edit;

    }


    var app = angular.module("songApp");
    app.controller("EditSongController", ['dataService','genreService', editsong]);
}())