(function () {
    function editgenre(dataService, genreService) {
        var edit = this;
        edit.showlistContainer = true;
        edit.editListcontainer = false;
        edit.genre = {};

        edit.submit = function () {
            genreService.update({ id: edit.genre.id }, edit.genre).$promise.then(function (data) {
                console.log(data);
                alert("Updated Successfully");
                edit.showlistContainer = true;
                edit.editListcontainer = false;
            });
        };

        edit.editGenre = function () {
            edit.showlistContainer = false;
            edit.editListcontainer = true;
            var obj = edit.genresList.filter(function (song) {
                if (song.id == edit.selectedGenre)
                    return true;
            });

            edit.genre.genrename = obj[0].name;
            edit.genre.id = obj[0].id;

        };



        (function () {
            //edit.songlist = dataService.query();
            //console.log(edit.songlist);
            genreService.query().$promise.then(function (data) {
                edit.genresList = data.results;
                console.log(edit.genresList);
            });
        }())
        return edit;
    }


    var app = angular.module("songApp");
    app.controller("EditGenreController", ['dataService', 'genreService', editgenre]);
}())