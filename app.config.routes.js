(function() {
  'use strict';

  console.log("in routes");

  angular
    .module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider){

    // this line is optional
    $locationProvider.html5Mode(true);

    $stateProvider
      // .state({
      //   name: 'home',
      //   url: '/',
      //   component: 'app'
      // })
      .state({
        name: 'comments',
        url: '/comments',
        component: 'app'
      });
      // .state('comments', {
      //  url: '/comments',
      //  component: 'app',
      //  template: '<h1>Comments State!</h1>'
      // });
  });

  // .controller('commentsCtrl', function())

}());
