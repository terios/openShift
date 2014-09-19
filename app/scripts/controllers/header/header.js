'use strict';

/* global io */
angular.module('pfeApp').controller('HeaderCtrl', [
  '$scope',
  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.state = false;
    $scope.init = function () {
      var socket = io.connect('http://localhost:3000');// jshint ignore:line
        socket.on('news', function (data) {
        if (data.onlineState) {
          $scope.state = data.onlineState;
        } else {
          $scope.state = data.onlineState;
        }
        $scope.$digest();
        socket.emit('my other event', { my: 'data' });
      });
    };
  }
]);