$(function(){
    // name space
    window.App = {
        Models: {},
        Collections: {},
        Views: {}
    };

    // template (helper)
    window.template = function( id ) {
        return _.template( $( '#' + id ).html() );
    };

    App.Models.Task = Backbone.Model.extend({
        validate: function(attrs) {
            if ( ! $.trim(attrs.title) ) {
                return 'Task title cannot be empty';
            }
        }
    });

    App.Views.Task = Backbone.View.extend({
        initialize: function() {
            // _.bindAll( this, 'editTask', 'render' );
            this.model.on( 'change', this.render, this );
        },
        tagName: 'li',
        template: template( 'taskTemplate' ),
        render: function() {
            var template = this.template( this.model.toJSON() );
            this.$el.html( template );
            return this;
        },
        events: {
            'click .edit': 'editTask'
        },
        editTask: function() {
            var newTaskTitle =  prompt( 'How want u rename the task? ', this.model.get( 'title' ) );
            this.model.set({ 'title': newTaskTitle }, { validate: true } );
        }
    });

    App.Collections.Task = Backbone.Collection.extend({
        model: App.Models.Task
    });

    App.Views.Tasks = Backbone.View.extend({
        tagName: 'ul',
        render: function() {
            this.collection.each( this.addOne, this );
            return this;
        },
        addOne: function(task) {
            // create new View
            var taskView = new App.Views.Task({ model: task });
            // add this view into the root
            this.$el.append( taskView.render().el );
        }
    });

    var tasksCollection = new App.Collections.Task([
        {
            title: 'Go to the shop',
            priority: 4
        },
        {
            title: 'Get mail',
            priority: 3
        },
        {
            title: 'Go to the work',
            priority: 5
        }
    ]);

    var tasksView = new App.Views.Tasks({ collection: tasksCollection });

    $('.tasks').html( tasksView.render().el );

});
