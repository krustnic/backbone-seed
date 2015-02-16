/**
* Created with leti-seed.
* User: krustnic
* Date: 2015-01-12
* Time: 01:05 PM
* To change this template use Tools | Templates.
*/

var config = {
    //TODO: replace to version number
    urlArgs: "bust=" + (new Date()).getTime(),
    baseUrl: "/assets/js",
    paths: {
        "underscore"    : "../libs/underscore/underscore",
        "backbone"      : "../libs/backbone/backbone",
        "jquery"        : "../libs/jquery/jquery.min",
        "text"          : "../libs/require/text",
        "bootstrap"     : "../libs/bootstrap/bootstrap.min",
        "epoxy"         : "../libs/backbone/backbone.epoxy.min",
        "marionette"    : "../libs/backbone/backbone.marionette.min",
        "datatables"    : "../libs/datatables/js/jquery.dataTables",
        "datatables-bootstrap" : "../libs/datatables/js/dataTables.bootstrap",
        "chosen"           : "../libs/chosen/chosen.jquery.min",
        "select2"          : "../libs/select2/select2.min",
        "tablesort"        : "../libs/tablesort/tablesort",

        "jasny-bootstrap"  : "../libs/jasny-bootstrap/js/jasny-bootstrap.min",

        "jasmine"          : "../../tests/libs/jasmine/jasmine",
        "jasmine-boot"     : "../../tests/libs/jasmine/boot",
        "jasmine-html"     : "../../tests/libs/jasmine/jasmine-html"
    },
    shim: {

        "jasny-bootstrap" : {
            deps : [ "jquery", "bootstrap" ]
        },

        "underscore" : {
            export : "_"
        },

        "jquery" : {
            export : "$"
        },

        "backbone" : {
            deps : [ "jquery", "underscore", "text" ],
            exports: "Backbone"
        },

        "epoxy" : {
            deps : [ "backbone" ]
        },

        "bootstrap" : {
            deps : ["jquery"]
        },

        "marionette" : {
            deps : ['jquery', 'underscore', 'backbone'],
            exports : 'Marionette'
        },

        "datatables-bootstrap" : {
            deps : ['datatables']
        },

        "chosen" : {
            deps : ['jquery']
        },

        "jasmine" : {
            exports: 'jasmine'
        },

        "jasmine-html" : {
            deps : [
                "jasmine"
            ],
            exports : "jasmine"
        },

        "jasmine-boot" : {
            deps : [
                "jasmine-html"
            ],
            exports : "jasmine"
        }

    }
};

if ( window.require != undefined ) {
    require.config( config );
}
else {
    require = config;
}