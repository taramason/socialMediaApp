(function() {
  'use strict';

  angular.module("app", ['ui.router'])

    .component("redditclone", {
      controller: function appController($http){
        const vm = this;

        vm.$onInit = function() {
          vm.time = new Date();
          vm.posts = [
            {
              time: new Date (),
              count: 2,
              text: "I love Kittens",
              body: "This is my cat when she was a kitten. Squish! Isn't she cute?",
              author: "Author McAuthorson",
              imgurl: "https://s-media-cache-ak0.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
              comments: [
                {body: 'lol!'},
                {body: 'I did it for the lolz'}
              ]
            },
              {
                time: new Date (),
                count: 0,
                text: "I love Puppies",
                body: "Puppies are cuter. OMG I can't handle how cute this puppy is",
                author: "Tim Mackey",
                imgurl: "http://www.kayfabenews.com/wp-content/uploads/2015/02/puppy4.jpg",
                comments: []
                }
          ];
          vm.comments = [];
        };


        vm.addPost = function(){
          // get post from form
          console.log(vm.post)
          // set defaults for moments library
          vm.post.time = new Date();
          vm.post.count = 0;
          vm.post.comments = [];
          // update posts
          vm.posts.push(vm.post);
          // 2: post to server
          delete vm.post;
        };
        // $scope.todos.push({'title':$scope.newTodo , date: new Date(), 'done':false})

        // vm.updateTime = function () {
        //   vm.time = new Date();
        // };

        vm.addComment = function(post){
          console.log(post);
          post.comments.push(vm.comment);
          // 2: post to server onto the post with post.id
          delete vm.comment;
        };
//try to make a ++ for counts to fix count
        vm.noNegative = function() {
          console.log("count= ", post.count)
          if (vm.post.count >= 1 ) {
            vm.post.count = vm.post.count - 1;
          } else {
            vm.post.count = 0;
          }
        };

      },


      templateUrl: './main.html'

    });






}());
