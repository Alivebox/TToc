var App = Ember.Application.create();

App.Router.map(function() {
    this.resource('user', {path: '/users/:user_id'});
});

App.UserRoute = Ember.Route.extend({
    model: function(params) {
        return users[params.user_id];
    }
});

App.ApplicationRoute = Ember.Route.extend({
    model: function() {
        return users;
    },
    setupController: function(controller, model){
        controller.set('info', model)
    }
});

var users = [
    {
        id: 0,
        name: 'What´s New',
        description: 'Description what´s New',
        avatar: 'https://si0.twimg.com/profile_images/3123276865/5c069e64eb7f8e971d36a4540ed7cab2.jpeg'
    },
    {
        id: 1,
        name: 'Journal',
        description: 'Description Journal',
        avatar: 'https://si0.twimg.com/profile_images/1317834118/avatar.png'
    },
    {
        id: 2,
        name: 'Research',
        description: 'Description Research',
        avatar: 'https://si0.twimg.com/profile_images/3250074047/46d910af94e25187832cb4a3bc84b2b5.jpeg'
    },
    {
        id: 3,
        name: 'Discovery',
        description: 'Description Discovery',
        avatar: 'https://si0.twimg.com/profile_images/3123276865/5c069e64eb7f8e971d36a4540ed7cab2.jpeg'
    },
    {
        id: 4,
        name: 'Reading List',
        description: 'Description Reading List',
        avatar: 'https://si0.twimg.com/profile_images/3250074047/46d910af94e25187832cb4a3bc84b2b5.jpeg'
    }
];;