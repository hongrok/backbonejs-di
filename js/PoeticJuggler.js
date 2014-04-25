define([
    "js/Juggler"
], function(Juggler){

    var PoeticJuggler = Juggler.extend({

        poem : null,

        perform : function(){
            this._super();
            this.poem.recite();
        }

    });

    return PoeticJuggler;

});
