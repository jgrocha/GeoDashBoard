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

    listeners: {
        beforedeactivate: 'onBeforeDeactivate',
        afterrender: 'afterMapPanelRender',
        afterlayout: 'afterMapPanelLayout'
    },

    items: [{
        xtype: 'panel',
        title: 'Help',
        responsiveCls: 'big-100',
        iconCls: 'x-fa fa-question-circle',
        bodyPadding: '10 10 0 10',
        html: 'This view shows a map with just two layers, a grid, a legend tree and an overview map.<br/>' +
        'The population grid is synchronized with the population layer. You can <b>click</b> to select a city on the map or on the grid.' +
        ' If you select a city in the grid that is not visible on the map, the map is centered in that city.<br/>' +
        'You can <b>double click</b> to open a popup window on the map.<br/>' +
        'The source code is available from <a target="_blank" href="https://github.com/jgrocha/GeoDashBoard">https://github.com/jgrocha/GeoDashBoard</a>'
    }, {
        xtype: 'geo-mapcanvas',
        responsiveCls: 'big-100',
        height: 400 // good to know
    }, {
        xtype: 'geo-mapgrid',
        reference: 'geo-mapgrid',
        responsiveCls: 'big-33 small-50'
    }, {
        xtype: 'geo-tree',
        responsiveCls: 'big-33 small-50'
    }, {
        xtype: 'geo-overviewmap',
        reference: 'geo-overviewmap',
        responsiveCls: 'big-33 small-50',
        height: 260 // good to know
    }]
});
