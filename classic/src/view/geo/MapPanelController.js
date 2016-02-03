Ext.define('Admin.view.geo.MapPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.geo-map',

    onBeforeDeactivate: function (view) {
        var windows = Ext.ComponentQuery.query('popup-window');
        windows.forEach(function (element, index, array) {
            element.destroy();
        });
    }

});
