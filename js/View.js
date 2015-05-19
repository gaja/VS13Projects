// models
var app = {};
app.Todo = Backbone.Model.extend({
   defaults: {
      title: '',
      completed: false
   }
});
// some console testing
// var todo = new todoApp({title: 'something', completed: false});
// todo.get('title');
// todo.get('completed');
// todo.set('created_at', Date());
// todo.get('created_at');

// collections
app.TodoList = Backbone.Collection.extend({
   model: app.Todo,
   localStorage: new Store("backbone-todo")
});
app.todoList = new app.TodoList();
// some console testing
// var todoList = new app.TodoList();
// todoList.create({title: 'learn backbonejs collection'});
// var lmodel = new app.Todo({title: 'learn models', completed: true});
// todoList.add(lmodel);
// todoList.pluck('title');
// todoList.pluck('completed');
// JSON.stringify(todoList);

// there are 4 basic properties in View
// el, initialize, render, events

// delegated events == protype
// {"<event type> <elemet-id>": "<callback_function>"}
// example
//    events: 'keypress #new_todo': 'createTodoOnEnter',
// in jQuery it will be something like this
//    $('#new_todo').keypress(createTodoOnEnter);



// render individual todo items list
app.TodoView = Backbone.View.extend({
   tagName: 'li',
   template: _.template($('#item-template').html()),
   render: function() {
   this.$el.html(this.template(this.model.toJSON()));
   return this; // enable chained calls
   }
});
var view = new app.TodoView({mode: todo});

// backbone events
// events methods(just a few): on, off, trigger

// on
// object.on(event, callback, [context])
// exaple:
//    todoList.on('add', this.addAll, this);

// events can be set on arbitrary objects using underscore.js extend function
// var object = {},
//     callback = function(msg) {console.log("triggers " + msg);};
// _.extend(object, Backbone.Events);
// object.on("my_event", callback);
// object.trigger("my_event", "my custom event");
