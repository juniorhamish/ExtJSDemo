Ext.define('KitchenSink.view.binding.TwoWay', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.binding-two-way',
  requires: [
      'KitchenSink.view.binding.Component'
  ],

  viewModel: {
    data: {
      foo: 'Dave'
    }
  },

  bind: {
    title: '{foo}'
  },

  items: [{
    xtype: 'textfield',
    fieldLabel: 'Foo',
    labelWidth: 50,
    // The default config for textfield in a bind is "value" (two-way):
    bind: {
      value: '{foo}'
    }
  }, {
    xtype: 'my-component',
    bind: {
      bar: '{foo}'
    }
  }]
});