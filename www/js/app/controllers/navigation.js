// Navigation: controlls the walk trough the station.
// leoncoto@gmail.com
define(function (require) {
    'use strict';

    //----------------------------------
    //
    // Setup
    //
    //----------------------------------
    var $ = require('jquery');
    var win = $(window);
    var Section = require('app/views/section');
    var currentSection = new Section({el: '#start'});

    //----------------------------------
    //
    // Event listeners
    //
    //----------------------------------

    currentSection.on('walkto', function (event) {
      currentSection.walkTo(event.platform);
    });

    win.keydown(function (event) {
      if (event.keyCode === 82) {
        currentSection.walkTo();
      }
    });

    setTimeout(function () {
      currentSection.showPlatforms();
    }, 500);
});
