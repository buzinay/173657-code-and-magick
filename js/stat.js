'use strict';

window.renderStatistics = function (ctx, names, times) {
  var initialX = 100;
  var initialY = 10;
  var cloudWidth = 420;
  var cloudHeight = 270;
  var offset = 10;
  var line = 10;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(initialX + offset, initialY + offset, cloudWidth, cloudHeight);

  ctx.fillStyle = '#fff';
  ctx.fillRect(initialX, initialY, cloudWidth, cloudHeight);

  var message = 'Ура вы победили!\nСписок результатов:';

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  var drawMessage = function (text) {
    var messageLines = text.split('\n');
    var lineHeight = 15;
    var initialMessageX = 140;
    var initialMessageY = 40;
    for (var i = 0; i < messageLines.length; i++) {
      ctx.fillText(messageLines[i], initialMessageX, initialMessageY + i * lineHeight);
    }
  };

  drawMessage(message);

  var histogramHeight = 150;
  var barWidth = 40;
  var indent = 50;
  var initialHistogramX = 140;
  var initialHistogramY = 240;

  var getMax = function (array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
      var time = array[i];
      if (time > max) {
        max = time;
      }
    }
    return max;
  };

  var maxTime = getMax(times);
  var step = histogramHeight / maxTime;

  for (var i = 0; i < times.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), initialHistogramX + i * (barWidth + indent), initialHistogramY - times[i] * step - line);
    ctx.fillText(names[i], initialHistogramX + i * (barWidth + indent), initialHistogramY + 2 * line);
    ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random().toFixed(2) + ')';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(initialHistogramX + i * (barWidth + indent), initialHistogramY - times[i] * step, barWidth, times[i] * step);
  }
};
