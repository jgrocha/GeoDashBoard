Ext.define("Admin.view.geo.MapPanel", {
    extend: "Ext.panel.Panel",
    alias: 'widget.geo-map',

    requires: [
        "Admin.view.geo.MapPanelController",
        "Admin.view.geo.MapPanelModel"
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
        responsiveCls: 'big-60'
    }, {
        xtype: 'geo-tree',
        //html: 'Legend',
        responsiveCls: 'big-40'
    }]
});
