/**
 * This view is an example list of people.
 */
Ext.define('ExtJSDemo.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'ExtJSDemo.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },
    selModel: {
        selType: 'spreadsheet',
        cellSelect: false,
        columnSelect: true,
        dragSelect: false,
        rowSelect: false,
        showHeaderCheckbox: false,
        toggleOnClick: true,
        allowDeselect: true,
        extensible: false,
        mode: 'SINGLE'
    },
    columns: [
        { text: 'Name',  dataIndex: 'name', sortable: false, hideable: false, draggable: false },
        { text: 'Email', dataIndex: 'email', flex: 1, sortable: false, hideable: false, draggable: false },
        { text: 'Phone', dataIndex: 'phone', flex: 1, sortable: false, hideable: false, draggable: false }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
