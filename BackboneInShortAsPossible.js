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
// removes all attribues form model including id

// id
// prototype -- model.id
// specail propertie of model. models can be retrived via id from collection
// and id is uded to generate model url's by defalt

// idAttribute
// prototype -- model.idAttribute
// a model unique identifier is stored under the id attribute. if you re direct
// communicate with backand db (couchdb, mongodb) that uses different uniqe
// key, you may set model idAttribute to transparently map from that key to id.
var Meal = Backbone.Model.extend({
   idAttribute: "_id"
});
var cake = new Meal({_id: 1, name: "sandwitch"});
alert("cake id: " + cake.id);

// cid
// prototype -- model.cid
// a special proprty of the models, cid or client id is id that is
// automatically assgned to all models when they are first created. used when
// models are not yet saved to server but needs to be visible to UI.

// attributes 
// model.attributes
// internal hash containing model's state. usuly a form of JSOM data from
// server. serilized row data from database, could be client side computed data
// please use set to update model state insted ding that directly 
// to retrive munge a copy of the model's attribute use
// _.clone(model.attributes);

// changed
// prrototype -- model.changed
// the model.changed propery is the internal hash that contains all the
// attributes that has changed since the last set.
// don't update change directly, becouse set will do it automaticly.
// copy of changed can be acquired by -- changedAttributes

// defaults
// prototype -- model.defaults -- model.defaults()
// the defaults hash (or function) can be used to specify the default
// attributes for your model.
// when creating an instance of the model, any unspecified attributes will be
// set to default their value.
var Meal = Backbone.Model.extend({
   defaults: {
      "apperative": "snaptz",
      "main meal": "vienna stake",
      "desert": "ice cream"
   }
});
alert("desert: " + (new Meal).get("desert"));   // objects are passed by reference. so, you can use defaults as function if you wanna more control

// toJSON
// prototype -- model.toJSON([options]);
// returns a shallow copy of model'a attributes for JSON stringification. This
// can be used for persistence, serialization, augumetation before beeing send
// to server. Thus not return JSON string. 
var artist = Backbone.model({
   name: 'Banksy',
   lname: 'JustBanksy'
});
artist.set({birthday: "12.12.1990"});
console.log(JSON.stringify(artist));

// sync
// prototype -- model.sync(method, model, [options]);
// uses Backbone.sync to persist model state to the server. Can be overriden
// for custom behavior

// fetch
// prototype -- model.fetch([options]);
// merges the model's state with attributes fetched from server by delegating
// to Bacbone.sync. Returns jqxhr. usefull if model has never  been populated
// with data, or if you like to ensure that you have the latest server state.
// Triggers change event if there is difference between server state and
// current attributes. 
// this example puls data every 10 seconds to keep data channel up to date
setInterval( function() {
   channel.fetch();
}, 10000);

// save
// prototype -- model.save([attributes], [options]);
// save your model to database by delegating to model.sync function. It returns
// jqXHR if validation is successful and false otherwise. The attribute hash
// should have atribute values that you want to change. keys that is not
// mentioned should not be altered. If model validate method and validation
// fails, the model will not be saved. If model isNew the save will be 'create'
// (http: post), if the model already exists the save will be 'update' (http:
// put). if you wish to send only changed models to server use following method
// model.save(attrs, {patch: true}); 
// Calling a save with new attributes will couse change event immediately, and
// request event as the Ajax requst begins to go to the server, and sync event
// after successfully acknowledged by server.
// Pass {wait: true} if you like to wait server to return data first.
// In example we have overriden Backbone.sync function. It recives create
// request the first time the model is saved, and an update request second
// time.
Backbone.sync = function(method, model) {
   console.log(method + ": " + JSON.strinify(model));
   model.set('id', 1);
};
var book = new Backbone.Model({
   title: "another book title",
   author: "some dity ass bastard"
});
book.save();   // create
book.save({author: "some other asshole"});   // update
// save accepts success and error callbacks in the options hash, which will be
// passed the arguments (model, response, options). If server validation fails,
// return will be non-200 HTTP response code, along with an error response in
// text or JSON.
book.save("author", "some prick", {error: function() { /* some code */}});

// destroy
// prototype -- model.destroy([options]);
// destroys th model on the server by delegating an HTTP delete request to
// Backbone.sync. Returns jqXHR object, or false if the model isNew. Accepts
// success and error callbacks in the options hash, which will be passed
// (model, response, options). Triggers a destroy event in the model which will
// bubble up through anny collections that contain it, a request event as it
// begins the Ajax request to the server, and sync event after the server has
// succesfully acknowledged the model's deletiop. Pass {wait: true} if like to
// wait server to respond before removing the model from the collection.
book.destroy({success: function(model, response) {
   // some code
}});

// validate
// prototype -- model.validate(attributes, options)
//
