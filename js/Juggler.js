define([
    "js/Performer"
], function(Performer){

    var Juggler = Performer.extend({

        beanBags : 3,

        perform : function(){
            this.$el.append("<p>" + this.name + " : Juggling " + this.beanBags + " BEANBAGS</p>");
        },

        initialize : function(options){
            this._super(options);
            this.perform();
        }

    });

    return Juggler;

});

