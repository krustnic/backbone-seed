define( [ "backbone", "text!ajax-loader/templates/ajax-loader.html" ], function( Backbone, loaderTpl ) {
    var AjaxLoaderView = Backbone.View.extend({

        el : "#ajax-loader",

        template : _.template( loaderTpl ),

        initialize : function() {

            var self = this;

            $(document).ajaxStart(function() {
                self.show();
            });

            $(document).ajaxStop(function() {
                self.hide();
            });

            this.render();
            this.hide();
        },

        render : function() {
            this.$el.html( this.template() );
            return this;
        },

        show : function() {
            this.$el.show();
        },

        _hide : function() {
            this.$el.hide();
        },

        hide : function() {
            var self = this;
            setTimeout( function() { self._hide() }, 600 );
        }

    });

    return AjaxLoaderView;
});