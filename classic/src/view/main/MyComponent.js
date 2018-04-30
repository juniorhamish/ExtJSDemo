Ext.define('KitchenSink.view.binding.Component', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.my-component',
  controller: 'my_controller',
  config: {
    bar: null
  },
  publishes: ['bar'],

  viewModel: {
    data: {
      baz: 'Baz'
    }
  },

  bind: {
    title: '{baz}'
  },
  items: [{
    xtype: 'textfield',
    id: 'davej',
    fieldLabel: 'Bar',
    labelWidth: 50,
    // The default config for textfield in a bind is "value" (two-way):
    bind: {
      value: '{baz}'
    }
  }]
});