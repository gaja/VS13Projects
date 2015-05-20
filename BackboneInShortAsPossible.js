/// bbjs in short dashes

// render template
<script>
   <li><%= value %></li>
</script>

// create model
Wine = Backbone.Model.extend({});

// model instance
firstWine = new Wine({
   name: 'Ribar'
});

// creating collection
Wines = Backbone.Collection.extend({
   Model: Wine,
   url: "#"
});

/dasches/ initialize model
wines = new Wines([
   {name: "Ribar"},
   {name: "Kuncic"},
   {name: "Zlatina"}
]);

// print out to console
console.log(wines.toJSON());

// define view
HomeView = Backbone.View.extend({
   el: 'body',
   initialize: function() {
      this.render();
   }
   render: function() {
      this.$el.empty();
      this.$el.append("<h1>Render from view</h1>");
      this.listView = new ListView();
      this.$el.append(this.listView.render().el);
      return this;
   }
});

// create another view linked with previous view
ListView = Backbone.View.extend({
   tagName: 'ul',
   initialize: function() {
      this.template = _.template($('#item-container').html());
   },
   render: function() {
      this.$el.empty();
      this.$el.append('<li>Jesica</li>');
      this.$el.append(<li>Jaimes</li>');
      this.$el.appned(this.template({value: "some template code."}));
      return this;
   }
});

// routes
$(document).ready(function() {
   wineApp = new AppRouter();
   Backbone.history.start();
});

// making route
AppRouter = Backbone.Router.extend({
   routers: {
      "": "home",
      "add": "add",
      "close": "home"
   },
   home: function() {
      console.log('home');
      new HomeView();
   },
   add: function() {
      console.log('add');
      new AddView();
   }
});

// adding events
AddView = Backbone.View.extend({
   className: "viewClass",
   tagName: "div",
   events: {
      "click #addBtn": "add"
   },
   add: function(e) {
      e.preventDefaults();
      console.log($(#name).val());
      return this;
   }
});

// extend
var Note = Backbone.Model.extend({
   initialize: function() {
      console.log("initializing...");
   },
   author: function() {
      var autor = prompt("your name plese:");
      console.log("Author: " + autor);
   },
   bookTitle: function(title) {
      console.log(title);
   }
});

var PrivateNote = Note.extend({
   bookTitle: function(title) {
      return title.owns(this);
   }
});

// super -- calling function of the same name in figher prototype chaining
var Note = Backbone.Model.extend({
   set: function(attributes, options) {
      Backbone.Model.prototype.set.apply(this, arguments);
   }
        // furder code...
});

// constructor/initialize
new Book ({
   title: "Jackob, the immaginery carracter",
   author: "Some Old Bastard"
});

// get
// prototype -- model.get(attibute);
note.get("title");

// set
// prototype -- model.set(atributes, [options]);
// can bind model events in set -- change:title, or change:content
note.set({title: "20.05.2015.", content: "backbone.js hussle"});
book.set("title", "another book title to make up");

// escape 
// prototype -- model.escape(attribute);
// simmilar to get, only return HTML escaped version of model attribute
// can prevent XSS attacks (chross side scripting attacks)
var hacker = new Backbone.Model({
   name: "<script>alert('xss')</script>";
});
alert(hacker.escape("name"));

// has
// returns true if the attribute is set to a non-null or non-undefined value
// prototype -- model.has(attribute)
if (note.has("title") {
   // do something
}

// unset 
// removes an attribute by deleting it from internal attribute hash. Fires
// change event unless silent is on.
// prototype -- model.unset(attribute, [options]);

// clear
// prototype -- model.clear([options]);
// removes all attribues form model
