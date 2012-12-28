// Wrapper for the start View
// leoncoto@gmail.com
define(function (require) {
    'use strict';

    var $ = require('jquery');
    var Backbone = require('backbone');

    return Backbone.View.extend({
      events: {
        'click .platform.picadilly': 'picadilly_clickHandler',
        'click .platform.jubilee': 'jubilee_clickHandler'
      },
      walkto: function (platform) {
        this.trigger('walkto', {platform: platform});
      },
      //----------------------------------
      //
      // Event handlers
      //
      //----------------------------------
      picadilly_clickHandler: function (event) {
        this.walkto('picadilly');
      },
      jubilee_clickHandler: function (event) {
        this.walkto('jubilee');
      }
    });
});
