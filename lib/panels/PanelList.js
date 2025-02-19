'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactPortal = require('react-portal');

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PanelList = function (_Component) {
  _inherits(PanelList, _Component);

  function PanelList() {
    _classCallCheck(this, PanelList);

    return _possibleConstructorReturn(this, (PanelList.__proto__ || Object.getPrototypeOf(PanelList)).apply(this, arguments));
  }

  _createClass(PanelList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          offset = _props.offset,
          objectComponent = _props.objectComponent,
          panelStyle = _props.panelStyle;

      var style = {
        left: offset.width + offset.x,
        top: offset.y + window.scrollY
      };
      return _react2.default.createElement(
        _reactPortal.Portal,
        { closeOnEsc: true, closeOnOutsideClick: true, isOpened: true },
        _react2.default.createElement(
          'div',
          { style: [_styles2.default.propertyPanel, style, panelStyle] },
          objectComponent.panels.map(function (Panel, i) {
            return _react2.default.createElement(Panel, _extends({ key: i }, _this2.props));
          })
        )
      );
    }
  }]);

  return PanelList;
}(_react.Component);

;

exports.default = (0, _radium2.default)(PanelList);