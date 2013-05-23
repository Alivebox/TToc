var App = Ember.Application.create();

App.Router.map(function() {
    this.resource('user', {path: '/users/:user_id'});
});

App.UserRoute = Ember.Route.extend({
    renderTemplate: function() {
        // Render default outlet
        this.render();
        // render extra outlets
        this.render("worthReading", {
            outlet: "worthReading",
            into: "application" // important when using at root level
        });
    },
    model: function(params) {
        return subCategories[params.user_id];
    },
    setupController: function(controller, model){
        controller.set('subCategories', subCategories)
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

var subCategories = [
    {
        id: 0,
        name: 'Sub Category What´s New',
        new: 1,
        toAdd:0,
        description: 'Description what´s New'
    },
    {
        id: 1,
        name: 'Sub Category Journal',
        new: 1,
        toAdd:0,
        description: 'Description Journal'
    },
    {
        id: 2,
        name: 'Sub Category Research',
        new: 1,
        toAdd:0,
        description: 'Description Research'
    },
    {
        id: 3,
        name: 'Sub Category Discovery',
        new: 1,
        toAdd:0,
        description: 'Description Discovery'
    },
    {
        id: 4,
        name: 'Sub Category Reading List',
        new: 1,
        toAdd:0,
        description: 'Description Reading List'
    }
];

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