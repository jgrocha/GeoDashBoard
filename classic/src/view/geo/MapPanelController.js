Ext.define('Admin.view.geo.MapPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.geo-map',

    onBeforeDeactivate: function (view) {
        var windows = Ext.ComponentQuery.query('popup-window');
        windows.forEach(function (element, index, array) {
            element.destroy();
        });
    },

    afterMapPanelLayout: function (view) {
        //<debug>
        console.log('afterMapPanelLayout');
        //</debug>
    },

    afterMapPanelRender: function (view) {
        //<debug>
        console.log('afterMapPanelRender');
        //</debug>
        var me = this;
        var olMap = view.down('geo-mapcanvas').map;
        var overview = Ext.create('GeoExt.component.OverviewMap', {
            parentMap: olMap
        });
        var panel = view.down('geo-overviewmap');
        panel.add(overview);
    }

});
