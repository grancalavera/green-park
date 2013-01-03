// Start section implementation
// leoncoto@gmail.com
define(function (require) {
    'use strict';
    var $ = require('jquery');
    var Section = require('app/views/section');
    return Section.extend({
      template: require('templates').tunnel
    });
});
