Ext.define('KitchenSink.view.binding.Component', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.my-component',
  config: {
    bar: null
  },
  publishes: ['bar'],

  bind: {
    title: '{bar}'
  },
  applyBar: function (value) {
    if (value !== this.title) {
      this.setTitle(value);
    }
    Ext.getCmp('davej').setValue(value);
    return value;
  },
  setTitle: function (value) {
    this.callParent(arguments);
    if (value !== this.bar) {
      this.setBar(value);
    }
    return value;
  },
  items: [{
    xtype: 'textfield',
    id: 'davej',
    fieldLabel: 'Bar',
    labelWidth: 50,
    // The default config for textfield in a bind is "value" (two-way):
    bind: {
      value: '{bar}'
    }
  }]
});