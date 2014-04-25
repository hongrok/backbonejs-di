define([
    "js/AppContext",
    "backbone",
    "backboneSuper",
], function(AppContext){

    var BaseApp = Backbone.View.extend({

        // 가장 중요한 함수
        // App을 자동으로 생성해준다.
        // data-app-layload의 값을 true로 줄경우 트리거를 받아 생성한다. 이때 트리거이름은 createApp:app-name 으로 날리면 된다.
        createApplication: function (el) {
            var $el = $(el),
                appClass = $el.data("app-class"),
                appName = $el.data("app-name"),
                isLazyLoad = $el.data("app-lazyload"),
                includeElement = $el.data("app-element"),
                appEl;

            if(includeElement === true){
                appEl = $el;
            } else if(typeof includeElement == "string") {
                appEl = this.$el.find(includeElement);
            } else {
                appEl = null;
            }

            var requireApplication = $.proxy(function(options){
                require([appClass], $.proxy(function (Application) {
                    new Application($.extend({}, {
                        "name" : appName,
                        "el" : appEl
                    }, options || {}));
                }, this));
            }, this);

            if(isLazyLoad === true){
                this.once("createApp:" + appName, requireApplication);
            } else {
                requireApplication();
            }

            $el.removeAttr("data-app-class");
        },

        //앱이 로드될때 AppStore에 등록한다
        addAppContext : function () {
            AppContext.add({
                name : this.name,
                app : this
            });
        },

        //data-app-class attribute를 찾아서 자동으로 app을 생성한다.
        initApplication : function (){
            _.each(this.$el.find("[data-app-class]"), this.createApplication, this);
        },

        initialize : function(options){
            $.extend(true, this, {}, _.clone(options || {}));
            this.addAppContext();
            this.initApplication();
        }
    });

    return BaseApp;
});