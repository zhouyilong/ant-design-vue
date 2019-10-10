'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueTypes = require('../_util/vue-types');

var _vueTypes2 = _interopRequireDefault(_vueTypes);

var _empty = require('../empty');

var _empty2 = _interopRequireDefault(_empty);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* babel-plugin-inline-import './empty.svg' */var emptyImg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMSkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgPGVsbGlwc2UgZmlsbD0iI0Y1RjVGNSIgY3g9IjMyIiBjeT0iMzMiIHJ4PSIzMiIgcnk9IjciLz4NCiAgICA8ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI0Q5RDlEOSI+DQogICAgICA8cGF0aCBkPSJNNTUgMTIuNzZMNDQuODU0IDEuMjU4QzQ0LjM2Ny40NzQgNDMuNjU2IDAgNDIuOTA3IDBIMjEuMDkzYy0uNzQ5IDAtMS40Ni40NzQtMS45NDcgMS4yNTdMOSAxMi43NjFWMjJoNDZ2LTkuMjR6Ii8+DQogICAgICA8cGF0aCBkPSJNNDEuNjEzIDE1LjkzMWMwLTEuNjA1Ljk5NC0yLjkzIDIuMjI3LTIuOTMxSDU1djE4LjEzN0M1NSAzMy4yNiA1My42OCAzNSA1Mi4wNSAzNWgtNDAuMUMxMC4zMiAzNSA5IDMzLjI1OSA5IDMxLjEzN1YxM2gxMS4xNmMxLjIzMyAwIDIuMjI3IDEuMzIzIDIuMjI3IDIuOTI4di4wMjJjMCAxLjYwNSAxLjAwNSAyLjkwMSAyLjIzNyAyLjkwMWgxNC43NTJjMS4yMzIgMCAyLjIzNy0xLjMwOCAyLjIzNy0yLjkxM3YtLjAwN3oiIGZpbGw9IiNGQUZBRkEiLz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg0K';


var RenderEmpty = {
  functional: true,
  inject: {
    configProvider: { 'default': function _default() {
        return _.ConfigConsumerProps;
      } }
  },
  props: {
    componentName: _vueTypes2['default'].string
  },
  render: function render(createElement, context) {
    var h = arguments[0];
    var props = context.props,
        injections = context.injections;

    function renderHtml(componentName) {
      var getPrefixCls = injections.configProvider.getPrefixCls;
      var prefix = getPrefixCls('empty');
      switch (componentName) {
        case 'Table':
        case 'List':
          return h(_empty2['default'], {
            attrs: { image: emptyImg },
            'class': prefix + '-normal' });

        case 'Select':
        case 'TreeSelect':
        case 'Cascader':
        case 'Transfer':
          return h(_empty2['default'], {
            attrs: { image: emptyImg },
            'class': prefix + '-small' });

        default:
          return h(_empty2['default']);
      }
    }
    return renderHtml(props.componentName);
  }
};

function renderEmpty(h, componentName) {
  return h(RenderEmpty, {
    attrs: { componentName: componentName }
  });
}

exports['default'] = renderEmpty;