define(function(require) {
    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');
    var Modernizr = require('modernizr');

    var win = $(window);
    var doc = $(document);
    var cnt = $('#container');
    var picadilly = 'rgb(33, 23, 102)';
    var jubilee = 'rgb(85, 87, 71)';
    var template = '<div class="tile"></div>';

    // odds = 1 is always true
    // odds = 0 is always false
    function biasedCoin(odds) {
      return function () {
        if (odds === 0) {
          return false;
        }
        return Math.random() <= odds ? true : false;
      };
    }

    var paintMosaic = biasedCoin(0.20);

    function dimensions () {
      var w = win.width(),
          h = win.height(),
          side = 18,
          gap = 2,
          cols = Math.floor(w / side),
          rows = Math.floor(h / side);

      // cols = rows = 0;

      return {
        w: w,
        h: h,
        cols: cols + 1,
        rows: rows + 1,
        side: side,
        gap: gap
      };
    }

    function clear() {
      $('.tile').remove();
      console.log('clear()', Date.now());
    }

    function update() {
      var d = dimensions(), grid = [];
      clear();
      console.log('update()', Date.now(), '\nw:', d.w, 'h:', d.h, '| c:', d.cols, 'r:', d.rows, '\n-');

      grid = _.reduce(_.range(0, d.cols), function (grid, colIndex, colIndex2, cols) {
        var col = _.reduce(_.range(0, d.rows), function (col, rowIndex, rowIndex2, rows) {
          var tile = {
            left: colIndex * d.side,
            top: rowIndex * d.side,
            paint: paintMosaic()
          }, oddsForJubilee;
          if (tile.paint) {
            // from picadilly to jubilee, so the odds are for jubilee
            oddsForJubilee = colIndex / (cols.length - 1);
            tile.color = biasedCoin(oddsForJubilee)() ? jubilee : picadilly;
          }
          col.push(tile);
          return col;
        }, []);
        return grid.concat(col);
      }, []);

      _.each(grid, function (item) {
        var tile = $(template);
        tile
          .css('left', item.left + d.gap)
          .css('top', item.top + d.gap)
          .css('width', d.side - d.gap)
          .css('height', d.side - d.gap);

        if (item.paint) {
          tile.css('backgroundColor', item.color);
        }

        $('body').append(tile);
      });
    }

    function isTouch() {
      if (Modernizr.touch) {
        return true;
      }
      return false;
    }

    var viewportContent = {
      'user-scalable': 'no',
      'initial-scale':'1.0',
      'maximum-scale': '1.0'
    };

    function viewportValue(options) {
      var val = _.extend({}, viewportContent, options);
      val = _.reduce(_.keys(val), function (cntVal, key) {
        cntVal.push(key + '=' + val[key]);
        return cntVal;
      }, []).join(',');
      return val;
    }

    var currentViewportVal = '';
    function updateViewport() {
      var landscape = 'landscape',
          portrait = 'portrait',
          viewport = $('meta[name=viewport]'),
          d = dimensions(),
          newViewportVal;

      console.log('updateViewport', Date.now());
      // portrait
      console.log(d.w, d.h);
      if (d.w < d.h) {
        newViewportVal = viewportValue({width: 'device-width'});
      // landscape
      } else {
        newViewportVal = viewportValue({width: 'device-height'});
      }

      console.log('will update:', currentViewportVal !== newViewportVal);

      if (currentViewportVal !== newViewportVal) {
        viewport.attr('content', newViewportVal);
        currentViewportVal = newViewportVal;
        update();
      }
    }

    $(function () {
      var upd = isTouch() ? updateViewport : update,
          debUpd = _.debounce(upd, 500),
          debClr = _.debounce(clear, 500, true);
      upd();
      win.resize(function () {
        // debClr();
        debUpd();
      });
    });
});
