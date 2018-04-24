/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ExtJSDemo.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record, row, column) {
        // Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
      // sender.select({
      //   row: 0,
      //   column: 1
      // });
      // sender.select({
      //   row: 1,
      //   column: column
      // });
      // sender.select({
      //   row: 2,
      //   column: column
      // });
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
