define([
    "backbone",
    "backboneSuper"
], function(){
    var AppInstance, AppStore;

    AppInstance = Backbone.Model.extend({

        idAttribute : "appId",

        defaults : {
            "name" : null,
            "app" : null
        }
    });

    AppStore = Backbone.Collection.extend({

        model : AppInstance,

        dummyApp : new Backbone.View(),

        findByName : function(name){
            return this.findWhere({
                "name" : name
            });
        },

        getApp : function(app){
            if(!_.isEmpty(app) && !_.isEmpty(app.get("app")))
                return app.get("app");
            else
                return null;
        },

        getAppByName : function(name){
            return this.getApp(this.findByName(name));
        },

        triggerToAppByName : function(appName, name){
            var args = Array.prototype.slice.call(arguments, 1),
                app = this.getAppByName(appName);
            if(!_.isEmpty(app)){
                app.trigger.apply(app, args);
                return true;
            } else return false;
        },

        onCreate : function(model){
            this.trigger("create:" + model.get("name"), model.get("app"));
        },

        initialize : function(){
            this.on("add", this.onCreate);
        }

    });

    return new AppStore();
});