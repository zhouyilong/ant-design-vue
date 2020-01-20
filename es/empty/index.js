import _mergeJSXProps from 'babel-helper-vue-jsx-merge-props';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _extends from 'babel-runtime/helpers/extends';
import PropTypes from '../_util/vue-types';
import { ConfigConsumerProps } from '../config-provider';
import { getComponentFromProp, getListeners } from '../_util/props-util';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
/* babel-plugin-inline-import './empty.svg' */var emptyImg = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg0IiBoZWlnaHQ9IjE1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNCAzMS42NykiPg0KICAgICAgPGVsbGlwc2UgZmlsbC1vcGFjaXR5PSIuOCIgZmlsbD0iI0Y1RjVGNyIgY3g9IjY3Ljc5NyIgY3k9IjEwNi44OSIgcng9IjY3Ljc5NyIgcnk9IjEyLjY2OCIvPg0KICAgICAgPHBhdGggZD0iTTEyMi4wMzQgNjkuNjc0TDk4LjEwOSA0MC4yMjljLTEuMTQ4LTEuMzg2LTIuODI2LTIuMjI1LTQuNTkzLTIuMjI1aC01MS40NGMtMS43NjYgMC0zLjQ0NC44MzktNC41OTIgMi4yMjVMMTMuNTYgNjkuNjc0djE1LjM4M2gxMDguNDc1VjY5LjY3NHoiIGZpbGw9IiNBRUI4QzIiLz4NCiAgICAgIDxwYXRoIGQ9Ik0xMDEuNTM3IDg2LjIxNEw4MC42MyA2MS4xMDJjLTEuMDAxLTEuMjA3LTIuNTA3LTEuODY3LTQuMDQ4LTEuODY3SDMxLjcyNGMtMS41NCAwLTMuMDQ3LjY2LTQuMDQ4IDEuODY3TDYuNzY5IDg2LjIxNHYxMy43OTJoOTQuNzY4Vjg2LjIxNHoiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzLjU2KSIvPg0KICAgICAgPHBhdGggZD0iTTMzLjgzIDBoNjcuOTMzYTQgNCAwIDAgMSA0IDR2OTMuMzQ0YTQgNCAwIDAgMS00IDRIMzMuODNhNCA0IDAgMCAxLTQtNFY0YTQgNCAwIDAgMSA0LTR6IiBmaWxsPSIjRjVGNUY3Ii8+DQogICAgICA8cGF0aCBkPSJNNDIuNjc4IDkuOTUzaDUwLjIzN2EyIDIgMCAwIDEgMiAyVjM2LjkxYTIgMiAwIDAgMS0yIDJINDIuNjc4YTIgMiAwIDAgMS0yLTJWMTEuOTUzYTIgMiAwIDAgMSAyLTJ6TTQyLjk0IDQ5Ljc2N2g0OS43MTNhMi4yNjIgMi4yNjIgMCAxIDEgMCA0LjUyNEg0Mi45NGEyLjI2MiAyLjI2MiAwIDAgMSAwLTQuNTI0ek00Mi45NCA2MS41M2g0OS43MTNhMi4yNjIgMi4yNjIgMCAxIDEgMCA0LjUyNUg0Mi45NGEyLjI2MiAyLjI2MiAwIDAgMSAwLTQuNTI1ek0xMjEuODEzIDEwNS4wMzJjLS43NzUgMy4wNzEtMy40OTcgNS4zNi02LjczNSA1LjM2SDIwLjUxNWMtMy4yMzggMC01Ljk2LTIuMjktNi43MzQtNS4zNmE3LjMwOSA3LjMwOSAwIDAgMS0uMjIyLTEuNzlWNjkuNjc1aDI2LjMxOGMyLjkwNyAwIDUuMjUgMi40NDggNS4yNSA1LjQydi4wNGMwIDIuOTcxIDIuMzcgNS4zNyA1LjI3NyA1LjM3aDM0Ljc4NWMyLjkwNyAwIDUuMjc3LTIuNDIxIDUuMjc3LTUuMzkzVjc1LjFjMC0yLjk3MiAyLjM0My01LjQyNiA1LjI1LTUuNDI2aDI2LjMxOHYzMy41NjljMCAuNjE3LS4wNzcgMS4yMTYtLjIyMSAxLjc4OXoiIGZpbGw9IiNEQ0UwRTYiLz4NCiAgICA8L2c+DQogICAgPHBhdGggZD0iTTE0OS4xMjEgMzMuMjkybC02LjgzIDIuNjVhMSAxIDAgMCAxLTEuMzE3LTEuMjNsMS45MzctNi4yMDdjLTIuNTg5LTIuOTQ0LTQuMTA5LTYuNTM0LTQuMTA5LTEwLjQwOEMxMzguODAyIDguMTAyIDE0OC45MiAwIDE2MS40MDIgMCAxNzMuODgxIDAgMTg0IDguMTAyIDE4NCAxOC4wOTdjMCA5Ljk5NS0xMC4xMTggMTguMDk3LTIyLjU5OSAxOC4wOTctNC41MjggMC04Ljc0NC0xLjA2Ni0xMi4yOC0yLjkwMnoiIGZpbGw9IiNEQ0UwRTYiLz4NCiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDkuNjUgMTUuMzgzKSIgZmlsbD0iI0ZGRiI+DQogICAgICA8ZWxsaXBzZSBjeD0iMjAuNjU0IiBjeT0iMy4xNjciIHJ4PSIyLjg0OSIgcnk9IjIuODE1Ii8+DQogICAgICA8cGF0aCBkPSJNNS42OTggNS42M0gwTDIuODk4LjcwNHpNOS4yNTkuNzA0aDQuOTg1VjUuNjNIOS4yNTl6Ii8+DQogICAgPC9nPg0KICA8L2c+DQo8L3N2Zz4NCg==';

import Base from '../base';

export var TransferLocale = function TransferLocale() {
  return {
    description: PropTypes.string
  };
};

export var EmptyProps = function EmptyProps() {
  return {
    prefixCls: PropTypes.string,
    image: PropTypes.any,
    description: PropTypes.any
  };
};

var Empty = {
  name: 'AEmpty',
  props: _extends({}, EmptyProps()),
  methods: {
    renderEmpty: function renderEmpty(contentLocale) {
      var h = this.$createElement;

      var _$props = this.$props,
          customizePrefixCls = _$props.prefixCls,
          restProps = _objectWithoutProperties(_$props, ['prefixCls']);

      var prefixCls = ConfigConsumerProps.getPrefixCls('empty', customizePrefixCls);
      var image = getComponentFromProp(this, 'image');
      var description = getComponentFromProp(this, 'description');

      var des = description || contentLocale.description;
      var alt = typeof des === 'string' ? des : 'empty';

      var imageNode = null;
      if (!image) {
        imageNode = h('img', {
          attrs: { alt: alt, src: emptyImg }
        });
      } else if (typeof image === 'string') {
        imageNode = h('img', {
          attrs: { alt: alt, src: image }
        });
      } else {
        imageNode = image;
      }
      return h(
        'div',
        _mergeJSXProps([{ 'class': prefixCls }, { on: getListeners(this) }]),
        [h(
          'div',
          { 'class': prefixCls + '-image' },
          [imageNode]
        ), h(
          'p',
          { 'class': prefixCls + '-description' },
          [des]
        ), this.$slots['default'] && h(
          'div',
          { 'class': prefixCls + '-footer' },
          [this.$slots['default']]
        )]
      );
    }
  },
  render: function render() {
    var h = arguments[0];

    return h(LocaleReceiver, {
      attrs: { componentName: 'Empty' },
      scopedSlots: { 'default': this.renderEmpty } });
  }
};

/* istanbul ignore next */
Empty.install = function (Vue) {
  Vue.use(Base);
  Vue.component(Empty.name, Empty);
};

export default Empty;