(function() {
    require.config({
        baseUrl: "js/lib",
        paths: {
            app: "../app",
            templates: "../templates/dist/templates"
        },
        shim: {
            backbone: {
                exports: "Backbone",
                deps: [ "underscore", "jquery" ]
            },
            underscore: {
                exports: "_"
            },
            modernizr: {
                exports: "Modernizr"
            },
            handlebars: {
                exports: "Handlebars"
            },
            templates: {
                exports: "JST",
                deps: [ "handlebars" ]
            }
        }
    }), requirejs([ "app/greenpark" ]);
})();;