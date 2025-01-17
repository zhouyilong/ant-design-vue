/* eslint-disable no-console,func-names */
import Table from '../index';
import '../assets/index.less';

var data = [{
  a: 'a1'
}, {
  a: 'a2',
  b: 'b2',
  children: [{
    a: 'a2-1',
    b: 'b2-1'
  }, {
    a: 'a2-2',
    b: 'b2-2'
  }]
}, {
  a: 'a3',
  c: 'c3',
  d: 'd3'
}];

export default {
  methods: {
    handleClick: function handleClick(record, e) {
      e.preventDefault();
      console.log(record.a);
    }
  },

  render: function render() {
    var _this = this;

    var h = arguments[0];

    var columns = [{ title: 'title1', dataIndex: 'a', key: 'a', width: 100 }, { title: 'title2', dataIndex: 'b', key: 'b', width: 100 }, { title: 'title3', dataIndex: 'c', key: 'c', width: 200 }, {
      title: 'Operations',
      dataIndex: '',
      key: 'x',
      customRender: function customRender(text, record) {
        return h(
          'a',
          {
            attrs: { href: 'javascript:;' },
            on: {
              'click': function click(e) {
                return _this.handleClick(record, e);
              }
            }
          },
          ['click ', record.a]
        );
      }
    }];
    return h('div', [h('h2', ['sub table']), h(Table, {
      attrs: { columns: columns, expandIconAsCell: true, data: data, rowKey: function rowKey(record) {
          return record.a;
        } }
    })]);
  }
};