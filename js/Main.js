define([
    "js/BaseApp",
    "js/AppContext"
], function(BaseApp, AppContext){

    var Main = BaseApp.extend({

        name : "main",

        events : {
            "click button[action=loadDuke2]" : "loadDuke2",
            "click button[action=loadPoeticDuke]" : "loadPoeticDuke"
        },

        loadDuke2 : function(){
            var app = AppContext.getAppByName("duke2");

            if(_.isNull(app)) {
                this.trigger("createApp:duke2", {
                    beanBags: 15
                });
            } else {
                alert("already load duke2");
            }

        },

        loadPoeticDuke : function(){
            var app = AppContext.getAppByName("poeticDuke");

            if(_.isNull(app)) {
                this.trigger("createApp:poeticDuke", {
                    beanBags : 150,
                    poem : AppContext.getAppByName("sowol")
                });
            } else {
                alert("already load poeticDuke");
            }
        },

        initialize : function(options){
            this._super(options);
        }

    });

    return Main;

});