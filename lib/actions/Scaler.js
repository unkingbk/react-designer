"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (_ref) {
  var object = _ref.object,
      startPoint = _ref.startPoint,
      mouse = _ref.mouse;
  var objectX = startPoint.objectX,
      objectY = startPoint.objectY,
      clientX = startPoint.clientX,
      clientY = startPoint.clientY;

  var width = startPoint.width + mouse.x - clientX;
  var height = startPoint.height + mouse.y - clientY;

  return _extends({}, object, {
    x: width < 0 ? objectX + width : objectX,
    y: height < 0 ? objectY + height : objectY,
    width: Math.abs(width),
    height: Math.abs(height)
  });
};