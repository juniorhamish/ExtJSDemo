Ext.define('ViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.my_controller',

  init: function() {
    // This is another way of working around the problem - we use binding
    // to monitor a random 'trigger' value in the viewmodel, and whenever
    // we change the anything in the viewmodel we also change the trigger value.

    this.getViewModel().bind('{baz}', this.bazChanged, this);
  },


  bazChanged: function(value) {
    this.getView().setBar(value);
  }
});