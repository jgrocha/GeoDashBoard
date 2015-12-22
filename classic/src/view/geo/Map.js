Ext.define("Admin.view.geo.Map", {
    extend: "Ext.panel.Panel",
    alias: 'widget.geo-map',

    requires: [
        "Admin.view.geo.MapController",
        "Admin.view.geo.MapModel"
    ],

    layout: 'responsivecolumn',

    controller: "geo-map",
    viewModel: {
        type: "geo-map"
    },

    items: [{
        xtype: 'geo-mapcanvas',
        responsiveCls: 'big-100',
        height: 400 // good to know
    }, {
        xtype: 'geo-mapgrid',
        reference: 'geo-mapgrid',
        responsiveCls: 'big-100'
    }]
});
