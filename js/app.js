var PlayStation = angular.module('PlayStation', []);

PlayStation.controller('gamesList', ['$scope', 'gamesData', function($scope, gamesData) {
    gamesData.getGames(function(data) {
        $scope.games = data;
    });

}]);

PlayStation.factory('gamesData', function($http, $q) {
    return {
        getGames: function(callback) {
          $http.get('js/gameslist.json').success(callback);
        },
        getGamesList: function() {
            var games = $q.defer();
            this.getGames(function(data) {
               var gamesList = data;
                games.resolve(gamesList);
            });
            return games.promise;
        }
    }
});

PlayStation.filter('pInt', function() {
   return function(inp) {
       console.log(parseInt(inp));
       return parseInt(inp);
   };
});