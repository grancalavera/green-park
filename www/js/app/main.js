define(function(require) {
    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');

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
          side = 12,
          gap = 2,
          cols = Math.floor(w / side),
          rows = Math.floor(h / side);
      return {
        w: w,
        h: h,
        cols: cols + 1,
        rows: rows + 1,
        side: side,
        gap: gap
      };
    }

    function update() {
      var d = dimensions(), grid = [];

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

      $('.tile').remove();
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

    $(function () {
      update();
      win.resize(_.debounce(update, 500));
    });
});
