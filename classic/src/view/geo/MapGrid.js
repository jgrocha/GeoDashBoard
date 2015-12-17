
Ext.define("Admin.view.geo.MapGrid",{
    extend: "Ext.grid.Panel",
    alias: 'widget.geo-mapgrid',

    controller: "geo-mapgrid",
    viewModel: {
        type: "geo-mapgrid"
    },

    // The store will be set later
    // store: '{featureStore}',

    columns: [
        {xtype: 'gx_symbolizercolumn', width: 40},
        {text: 'Name', dataIndex: 'city', flex: 1},
        {
            text: 'Population',
            dataIndex: 'pop',
            xtype: 'numbercolumn',
            format: '0,000',
            flex: 1
        }
    ],

    listeners: {
        'selectionchange': 'featureGridSelectionChanged'
    }

});
