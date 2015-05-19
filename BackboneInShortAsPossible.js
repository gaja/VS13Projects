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
