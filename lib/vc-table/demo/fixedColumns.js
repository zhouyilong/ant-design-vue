'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

require('../assets/index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint-disable no-console,func-names */
var data = [{ a: '123', b: 'xxxxxxxx', d: 3, key: '1' }, { a: 'cdd', b: 'edd12221', d: 3, key: '2' }, { a: '133', c: 'edd12221', d: 2, key: '3' }, { a: '133', c: 'edd12221', d: 2, key: '4' }, { a: '133', c: 'edd12221', d: 2, key: '5' }, { a: '133', c: 'edd12221', d: 2, key: '6' }, { a: '133', c: 'edd12221', d: 2, key: '7' }, { a: '133', c: 'edd12221', d: 2, key: '8' }, { a: '133', c: 'edd12221', d: 2, key: '9' }];
exports['default'] = {
  data: function data() {
    var h = this.$createElement;

    this.columns = [{ title: 'title1', dataIndex: 'a', key: 'a', width: '100px', fixed: 'left' }, { title: 'title2', dataIndex: 'b', key: 'b', width: '100px', fixed: 'left' }, { title: 'title3', dataIndex: 'c', key: 'c' }, { title: 'title4', dataIndex: 'b', key: 'd' }, { title: 'title5', dataIndex: 'b', key: 'e' }, { title: 'title6', dataIndex: 'b', key: 'f' }, {
      title: h('div', ['title7', h('br'), h('br'), h('br'), 'Hello world!']),
      dataIndex: 'b',
      key: 'g'
    }, { title: 'title8', dataIndex: 'b', key: 'h' }, { title: 'title9', dataIndex: 'b', key: 'i' }, { title: 'title10', dataIndex: 'b', key: 'j' }, { title: 'title11', dataIndex: 'b', key: 'k' }, { title: 'title12', dataIndex: 'b', key: 'l', width: '100px', fixed: 'right' }];
    return {};
  },
  render: function render() {
    var h = arguments[0];

    return h(
      'div',
      { style: { width: '800px' } },
      [h('h2', ['Fixed columns']), h(_index2['default'], {
        attrs: {
          columns: this.columns,
          expandedRowRender: function expandedRowRender(record) {
            return record.key;
          },
          expandIconAsCell: true,
          scroll: { x: 1200 },
          data: data
        }
      })]
    );
  }
};