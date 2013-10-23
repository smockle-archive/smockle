/*jshint bitwise: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: double, undef: true, unused: vars, strict: true, trailing: true, maxdepth: 3, browser: true, asi: true */
/*global angular: true */

var NG_SMOCKLE = angular.module("NG_SMOCKLE", [])

NG_SMOCKLE.controller("feeds", ["$scope", "$http", function ($scope, $http) {
    "use strict";
    
    $http({
        url: "/home/feeds",
        method: "GET",
        headers: { "X-Requested-With": "XMLHttpRequest" }
    }).success(function (data, status, headers, config) {
        $scope.twitter = data.twitter
        $scope.stackoverflow = data.stackoverflow
        $scope.github = data.github
        $scope.instagram = data.instagram
    })
}])