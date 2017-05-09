(function () {
    var app = angular.module("songApp");

    app.factory("dataService", ["$resource",
       function ($resource) {
           return $resource("http://104.197.128.152:8000/v1/tracks", {}, {
               query: { method: "GET", isArray: false },
               create: { method: "POST" },
               get: { method: "GET", url: "/api/StudentsApi?id=:id" },
               remove: { method: "DELETE", url: "/api/StudentsApi?id=:id" },
               update: { method: "POST", url: "http://104.197.128.152:8000/v1/tracks/:id" }
           });
       }]);

    app.factory("genreService", ["$resource",
   function ($resource) {
       return $resource("http://104.197.128.152:8000/v1/genres", {}, {
           query: { method: "GET", isArray: false },
           create: { method: "POST" },
           get: { method: "GET", url: "/api/StudentsApi?id=:id" },
           remove: { method: "DELETE", url: "/api/StudentsApi?id=:id" },
           update: { method: "POST", url: "http://104.197.128.152:8000/v1/genres/:id" }
       });
   }]);


}())