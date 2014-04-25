require.config({

    urlArgs: "bust=" +  (new Date()).getTime(),

    paths : {
        "jquery": "//code.jquery.com/jquery-1.11.0.min",
        "underscore" : "lib/underscore",
        "backbone" : "lib/backbone",
        "backboneSuper" : "lib/backbone-super"
    },

    shim : {
        "jquery" : {
            exports : '$'
        },
        "underscore" : {
            exports : '_'
        },
        "backbone" : {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        "backboneSuper" : {
            deps : ['backbone']
        }

    }
});