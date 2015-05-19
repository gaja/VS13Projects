BackboneJS
- hard dependencies on underscore.js and soft dependencies on jQuery
- it's made out of following modules:
      -Views
      -Events
      -Models
      -Collections
      -Routers
- html body structure:
      -html code (div, ul ....)
      -libraries (jQuery, Underscore.js, BackboneJS, ...)
      -javascript code (<script></script>)
- entire page (the html code section(above)) will be built using Backbone.Views
- Backbone Views are the equivalent of controllers on MVC frameworks
      - glues together events, render HTML views and templates, and interact with models wich contain the data of the web application.
        - exapmle of backbone.View code (goes into javascript code section)
          var AppView = Backbone.View.extend({
                // el - stands for element. Every view has a element assoxiate in with HTML content will be renders.
                el: '#container',
                initialze: function() {
                   this.render();
                },
                // $el - it's a cached jQuery object (el), in which you can jQuery fuinctions to push content/ Like the Hello Worls on this case.
                render: function() {
                      this.$el.html("Hello World!")
                   }
             });
          var appView = new AppView(); // out: Hello World!
Backbonejs templates
_.js templates have the following syntax:
   _.template(templString, [data], [settings])
         -templString: use the place holder <%=%> and <%-%> to dynamically inset data.
            - allow HTML escape, while = does't
            <%%> use to run any javascript code.

